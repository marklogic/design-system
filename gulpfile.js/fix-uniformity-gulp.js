const gulp = require('gulp')
const fs = require('fs-extra')
const PluginError = require('plugin-error')
const through = require('through2')
const path = require('path')
const _ = require('lodash')
const { kebabCase } = require('lodash/string')
const merge = require('merge-stream')
const Vinyl = require('vinyl')
const eslint = require('gulp-eslint')

const checkMultipleComponentsOneFile = () => {
  return through.obj((file, enc, cb) => {
    const code = file.contents.toString()
    const matches = [...code.matchAll(/^const ML\w+/g)]
    if (matches.length > 1) {
      console.warn(`${path.basename(file.path)} has multiple components:`)
      for (const match of matches) {
        console.warn(`  ${match[0]}`)
      }
    }

    return cb(null, file)
  })
}

const ensureImport = (importStatement) => {
  return through.obj((file, enc, cb) => {
    if (!file.isBuffer()) {
      this.emit('error', new PluginError('fix stuff', 'Only buffers supported'))
    }
    if (/.*\/(MLSelect\/(MLOptGroup|MLOption)|MLSizeContext|(MLTreeSelect\/MLTreeNode)).*/.test(file.path)) {
      return cb(null, file)
    }

    const code = file.contents.toString()
    if (!code.includes(importStatement)) {
      console.log(`${file.history[0]} needs to import: ${importStatement}`)

      const importMatches = [...(code).matchAll(/import[^\n]*\n/g)]
      const lastMatch = _.last(importMatches)
      const insertPosition = lastMatch.index + lastMatch[0].length

      const newCode = code.slice(0, insertPosition) + importStatement + '\n' + code.slice(insertPosition)
      // console.log(newCode)

      file.contents = Buffer.from(newCode)
    }
    return cb(null, file)
  })
}

const removeImport = (importStatementRegex) => {
  return through.obj((file, enc, cb) => {
    if (!file.isBuffer()) {
      this.emit('error', new PluginError('fix stuff', 'Only buffers supported'))
    }
    const code = file.contents.toString()
    const newCode = code.replace(importStatementRegex, '')
    file.contents = Buffer.from(newCode)
    return cb(null, file)
  })
}

const addClassNames = () => {
  return through.obj((file, enc, cb) => {
    if (/.*\/(MLSelect\/(MLOptGroup|MLOption)|MLSizeContext|(MLTreeSelect\/MLTreeNode)).*/.test(file.path)) {
      return cb(null, file)
    }
    let madeChanges = false
    let code = file.contents.toString()
    const mainComponentName = path.basename(path.dirname(file.path))
    const childComponentName = path.basename(file.path).replace('.js', '')
    let kebabCaseName
    if (mainComponentName === childComponentName) {
      kebabCaseName = 'ml-' + kebabCase(childComponentName.replace(/^ML/, ''))
    } else {
      kebabCaseName = 'ml-' + kebabCase(mainComponentName.replace(/^ML/, '') + childComponentName.replace(/^ML/, ''))
    }

    {
      const pattern = new RegExp(`(?<indents> +)<(?<antComponentName>${childComponentName.replace('ML', '')})[ \n]+\{\.\.\.props\}[ \n]*(?<tagEndChar>(>|/>))`, 'g')
      const matches = [...code.matchAll(pattern)]
      if (matches.length !== 0) {
        madeChanges = true
      }

      code = code.replace(pattern,
`$<indents><$<antComponentName>
  $<indents>{...props}
  $<indents>className={classNames('${kebabCaseName}', props.className)}
$<indents>$<tagEndChar>`)

      file.contents = Buffer.from(code)
    }
    {
      const pattern = new RegExp(`(?<indents> +)<(?<antComponentName>${childComponentName.replace('ML', '')})[ \n]*(?<otherProps>.*)[ \n]+\{\.\.\.props\}[ \n]*(?<tagEndChar>(>|/>))`, 'g')
      const matches = [...code.matchAll(pattern)]
      if (matches.length !== 0) {
        madeChanges = true
      }

      code = code.replace(pattern,
`$<indents><$<antComponentName>
  $<indents>$<otherProps>
  $<indents>{...props}
  $<indents>className={classNames('${kebabCaseName}', props.className)}
$<indents>$<tagEndChar>`)

      file.contents = Buffer.from(code)
    }

    if (!madeChanges) {
      if (!file.contents.toString().includes("classNames('ml-")) {
        console.warn(`${mainComponentName}/${childComponentName} may need classNames() call manuallly added`)
      }
    }

    cb(null, file)
    // <Breadcrumb {...props}>
  })
}

const ensureStyleFolder = () => {
  return through.obj(function(file, enc, cb) {
    const componentDir = path.dirname(file.path)
    const antComponentName = path.basename(componentDir).replace('ML', '')
    const styleIndexPath = path.join(componentDir, 'style', 'index.js')
    if (!fs.existsSync(styleIndexPath)) {
      this.push(new Vinyl({
        base: file.base,
        cwd: file.cwd,
        path: styleIndexPath,
        contents: Buffer.from(
`import 'antd/es/${kebabCase(antComponentName)}/style'
import './index.less'
`),
      }))
    }
    const lessPath = path.join(componentDir, 'style', 'index.less')
    if (!fs.existsSync(lessPath)) {
      this.push(new Vinyl({
        base: file.base,
        cwd: file.cwd,
        path: lessPath,
        contents: Buffer.from(''),
      }))
    }

    cb(null)
  })
}

const fixDisplayNames = () => {
  return through.obj(function(file, enc, cb) {
    const childComponentName = path.basename(file.path).replace('.js', '')
    const parentComponentName = path.basename(path.dirname(file.path))

    if (/.*\/(MLSizeContext|MLList\/MLMeta).*/.test(file.path)) {
      return cb(null, file)
    }

    if (parentComponentName === childComponentName) {
      return cb(null, file)
    }

    const pattern = RegExp(`${childComponentName}.displayName = (.*?)\n`, 'g')

    const code = file.contents.toString()
    const matches = [...code.matchAll(pattern)]

    const correctedDisplayNameLine = `${childComponentName}.displayName = '${parentComponentName}.${childComponentName}'\n`

    if (matches.length === 0) {
      // Insert it before the export line
      const exportPattern = RegExp(`(?<exportLine>export default ${childComponentName})`)
      const newCode = code.replace(exportPattern, (
`${correctedDisplayNameLine}
$<exportLine>`
      ))
      file.contents = Buffer.from(newCode)
    } else if (matches.length === 1) {
      //  Modify the existing line
      const newCode = code.replace(pattern, correctedDisplayNameLine)
      file.contents = Buffer.from(newCode)
    } else {
      console.warn(`${parentComponentName}.${childComponentName} has multiple displayName lines; can't fix automatically.`)
    }

    cb(null, file)
  })
}

const fixUniformityTask = gulp.task('fix-uniformity', gulp.series(
  function fixCustomUniformityRules() {
    const src = gulp.src(path.resolve(__dirname, '../src/ML*/ML*.js'))
    return merge(
      src
        .pipe(checkMultipleComponentsOneFile())
        .pipe(removeImport(/import '\.\/style'\n/))
        .pipe(ensureImport("import classNames from 'classnames'"))
        .pipe(addClassNames())
        .pipe(fixDisplayNames()),
      src
        .pipe(ensureStyleFolder()),
    )
      .pipe(gulp.dest(path.resolve(__dirname, '../src')))
  },
  function fixESLintProblems() {
    const base = path.resolve(__dirname, '..')
    return gulp.src([
      path.resolve(__dirname, '../src/**/*.js'),
      path.resolve(__dirname, '../stories/**/*.js'),
      path.resolve(__dirname, '../*.js'),
    ], {base})
      .pipe(eslint({ fix: true }))
      // .pipe(eslint.format()) // Enable later once the output is less
      .pipe(gulp.dest(path.resolve(__dirname, '..')))
  },
))

module.exports = fixUniformityTask
