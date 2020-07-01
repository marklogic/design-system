/* eslint-disable no-useless-escape */
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
const exec = require('gulp-exec')

const skipFiles = ({ filePatterns }) => {
  return through.obj((file, enc, cb) => {
    if (!Array.isArray(filePatterns)) {
      filePatterns = [filePatterns]
    }
    for (const pattern of filePatterns) {
      if (pattern.test(path.basename(file.path))) {
        return cb(null, null)
      }
    }
    return cb(null, file)
  })
}

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

const ensureImport = (_importStatement) => {
  return through.obj((file, enc, cb) => {
    if (!file.isBuffer()) {
      this.emit('error', new PluginError('fix stuff', 'Only buffers supported'))
    }
    const importStatement = (typeof _importStatement === 'function' ? _importStatement(file) : _importStatement)
    if (/.*\/(MLSelect\/(MLOptGroup|MLOption)|MLSizeContext|MLTableContext|(MLTreeSelect\/MLTreeNode)).*/.test(file.path)) {
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
    if (/.*\/(MLSelect\/(MLOptGroup|MLOption)|MLIcon|MLSizeContext|MLTableContext|(MLTreeSelect\/MLTreeNode)).*/.test(file.path)) {
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

    let correctedDisplayNameLine
    if (parentComponentName === childComponentName) {
      correctedDisplayNameLine = `${childComponentName}.displayName = '${parentComponentName}'\n`
    } else {
      correctedDisplayNameLine = `${childComponentName}.displayName = '${parentComponentName}.${childComponentName}'\n`
    }

    const pattern = RegExp(`${childComponentName}.displayName = (.*?)\n`, 'g')

    const code = file.contents.toString()
    const matches = [...code.matchAll(pattern)]

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

const generateIndexFile = (componentPath) => {
  return through.obj(function(file, enc, cb) {
    const componentNames = fs.readdirSync(componentPath).filter((dirName) => {
      return /^(ML|ml).*$/.test(dirName)
    })

    let contents = ('')
    for (const componentName of componentNames) {
      contents += (
`export { default as ${componentName} } from './${componentName}'
`
      )
    }
    file.contents = Buffer.from(contents)

    return cb(null, file)
  })
}

const addMDXFilenameToMeta = () => {
  return through.obj(function(file, enc, cb) {
    if (file.meta === undefined) {
      file.meta = {}
    }
    file.meta.mdxFilepath = `./${path.basename(file.path).replace('.stories.jsx', '.mdx')}`
    return cb(null, file)
  })
}

const addDocsPageToExports = () => {
  return through.obj(function(file, enc, cb) {
    const code = file.contents.toString()

    if (/.*\/(0-Welcome.stories).*/.test(file.path)) {
      return cb(null, file)
    }

    if (code.includes('    docs: {\n      page: ')) {
      return cb(null, file)
    }

    file.contents = Buffer.from(
      code.replace('  parameters: {\n', '  parameters: {\n    docs: {\n      page: mdx,\n    },\n'),
    )
    return cb(null, file)
  })
}

const addFileNameToExports = () => {
  return through.obj(function(file, enc, cb) {
    const code = file.contents.toString()

    if (code.includes('    fileName: ')) {
      return cb(null, file)
    }

    file.contents = Buffer.from(
      code.replace('  parameters: {\n', `  parameters: {\n    fileName: '${path.basename(file.path)}',\n`),
    )
    return cb(null, file)
  })
}

const fixUniformityTask = gulp.task('fix-uniformity', gulp.series(
  function fixCustomUniformityRules() {
    const src = gulp.src(path.resolve(__dirname, '../src/ML*/ML*.js'))
    const srcJobs = merge(
      gulp.src(path.resolve(__dirname, '../src/index.js'))
        .pipe(generateIndexFile(path.resolve(__dirname, '../src'))),
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
    const stories = gulp.src(path.resolve(__dirname, '../stories/*.stories.jsx'))
    const storyJobs = merge(
      stories
        .pipe(skipFiles({ filePatterns: [/0-Welcome.*/] }))
        .pipe(addMDXFilenameToMeta())
        .pipe(ensureImport((file) => `import mdx from '${file.meta.mdxFilepath}'`)),
      stories
        .pipe(addFileNameToExports())
        .pipe(addDocsPageToExports()),
    )
      .pipe(gulp.dest(path.resolve(__dirname, '../stories')))
    // return storyJobs
    return merge(srcJobs, storyJobs)
  },
  function fixESLintProblems() {
    const base = path.resolve(__dirname, '..')
    return gulp.src([
      path.resolve(__dirname, '../src/**/*.js?(x)'),
      path.resolve(__dirname, '../stories/**/*.js?(x)'),
      path.resolve(__dirname, '../.storybook/*.js?(x)'),
      path.resolve(__dirname, './*.js?(x)'),
      path.resolve(__dirname, '../*.js?(x)'),
    ], { base })
      .pipe(eslint({ fix: true }))
      .pipe(eslint.format())
      .pipe(gulp.dest(path.resolve(__dirname, '..')))
  },
  function renameStoriesToJSX() {
    return gulp.src(path.resolve(__dirname, '../stories/*.stories.js'))
      .pipe(exec(file => `git mv ${file.path} ${file.path.replace('.js', '.jsx')}`))
      .pipe(through.obj(function(file, enc, cb) {
        console.warn(`Renaming story file: ${file.path} -- corresponding mdx file may need to be created.`)
        return cb(null)
      }))
  },
))

module.exports = fixUniformityTask
