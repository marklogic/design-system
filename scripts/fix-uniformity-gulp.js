const gulp = require('gulp')
const PluginError = require('plugin-error')
const through = require('through2')
const debug = require('gulp-debug')
const path = require('path')
const _ = require('lodash')
const { kebabCase } = require('lodash/string')

const insertStyleImport = () => {
  return through.obj((file, enc, cb) => {
    if (!file.isBuffer()) {
      this.emit('error', new PluginError('fix stuff', 'Only buffers supported'))
    }

    const code = file.contents.toString()
    if (!code.includes("import './style'")) {
      console.log(`${file.history[0]} needs to import style`)

      const importMatches = [...(code).matchAll(/import[^\n]*\n/g)]
      const lastMatch = _.last(importMatches)
      const insertPosition = lastMatch.index + lastMatch[0].length

      const newCode = code.slice(0, insertPosition) + "import './style'\n" + code.slice(insertPosition)
      // console.log(newCode)

      file.contents = Buffer.from(newCode)
    }
    return cb(null, file)
  })
}

const ensureImport = (importStatement) => {
  return through.obj((file, enc, cb) => {
    if (!file.isBuffer()) {
      this.emit('error', new PluginError('fix stuff', 'Only buffers supported'))
    }

    const code = file.contents.toString()
    if (!code.includes(importStatement)) {
      console.log(`${file.history[0]} needs to import style`)

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

const addClassNames = () => {
  return through.obj((file, enc, cb) => {
    let madeChanges = false
    let code = file.contents.toString()
    const componentName = path.basename(file.path).replace('.js', '')
    const kebabCaseName = kebabCase(componentName).replace(/^m-l-/, 'ml-')

    {
      const pattern = new RegExp(`(?<indents> +)<(?<antComponentName>${componentName.replace('ML', '')}) +\{\.\.\.props\} *(?<tagEndChar>(>|/>))`, 'g')
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
      const pattern = new RegExp(`^(?<indents> +)<(?<antComponentName>${componentName.replace('ML', '')})(?<otherProps>.*) \{\.\.\.props\} *(?<tagEndChar>(>|/>))`, 'g')
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
      return cb()
    }

    console.log(file.contents.toString())

    cb(null, file)
    // <Breadcrumb {...props}>
  })
}

gulp.task('fix-uniformity', function(resolve) {
  return gulp.src(path.resolve(__dirname, '../src/ML*/ML*.js'))
    // .pipe(insertStyleImport())
    .pipe(ensureImport("import './style'"))
    .pipe(ensureImport("import classNames from 'classnames'"))
    .pipe(addClassNames())
    .pipe(gulp.dest(path.resolve(__dirname, '../tmp')))
})
