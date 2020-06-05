const gulp = require('gulp')
const through = require('through2')
const merge = require('merge-stream')
const path = require('path')
const Vinyl = require('vinyl')
const gulpEval = require('gulp-eval')
const dedupe = require('gulp-dedupe')

const generateAntIconIndexCode = (iconNames) => {
  return (
`import { createWrappedMLIcon } from './icon-wrappers'

import * as AntIcons from '@ant-design/icons'

${iconNames.map((iconName) => (
`export const ${iconName} = createWrappedMLIcon(AntIcons.${iconName})`
)).join('\n')}
`
  )
}

const generateFontAwesomeIconIndexCode = (iconNames, iconStyleSuffix) => {
  return (
`import React from 'react'
import * as faIcons from '@fortawesome/free-${iconStyleSuffix.toLowerCase()}-svg-icons'

import { wrapFontAwesomeIcon } from './icon-wrappers'

${iconNames.map((iconName) => (
`export const ${iconName}${iconStyleSuffix} = wrapFontAwesomeIcon(faIcons.fa${iconName}, '${iconStyleSuffix}')`
)).join('\n')}
`
  )
}

const generateAntIconCode = (iconName) => {
  return (
`import { createWrappedMLIcon } from './icon-wrappers'
import Ant${iconName} from '@ant-design/icons/${iconName}'
const ${iconName} = createWrappedMLIcon(Ant${iconName})
export default ${iconName}
`
  )
}

const generateFontAwesomeIconCode = (faIconName, wrappedIconName, packageName) => {
  return (
`import { wrapFontAwesomeIcon } from './icon-wrappers'

const ${faIconName} = require('${packageName}/${faIconName}.js')

const ${wrappedIconName} = wrapFontAwesomeIcon(${faIconName})
export default ${wrappedIconName}
`
  )
}

const generateAntIconFiles = () => {
  return through.obj(function(indexFile, enc, cb) {
    // const matches = [...indexFile.contents.toString().matchAll(/export const (?<iconName>\w+) = createWrappedMLIcon/g)]
    // const iconNames = matches.map((pair) => pair[1])
    const iconNames = Object.keys(indexFile.data)

    for (const iconName of iconNames) {
      const iconFile = new Vinyl({
        cwd: indexFile.cwd,
        base: indexFile.base,
        path: path.resolve(indexFile.base, iconName + '.js'),
        contents: Buffer.from(generateAntIconCode(iconName)),
      })
      this.push(iconFile)
    }

    const ourIndexFile = new Vinyl({
      cwd: indexFile.cwd,
      base: indexFile.base,
      path: path.resolve(__dirname, '../src/MLIcon', 'ant-icons.js'),
      contents: Buffer.from(generateAntIconIndexCode(iconNames)),
    })
    this.push(ourIndexFile)

    return cb(null, null)
  })
}

const generateFontAwesomeIconFiles = (packageName, iconStyleSuffix, { cwd, base }) => {
  return through.obj(function(indexFile, enc, cb) {
    // const matches = [...indexFile.contents.toString().matchAll(/export const (?<iconName>\w+) = wrapFontAwesomeIcon/g)]
    // const iconNames = matches.map((pair) => pair[1])
    const faIconNames = Object.keys(indexFile.data[indexFile.data.prefix])
    // const iconNames = faIconNames.map((faIconName) => faIconName.replace(/^fa/, '') + iconStyleSuffix)

    for (const faIconName of faIconNames) {
      const iconName = faIconName.replace(/^fa/, '') + iconStyleSuffix
      const iconFile = new Vinyl({
        cwd: cwd,
        base: base,
        path: path.resolve(base, iconName + '.js'),
        contents: Buffer.from(generateFontAwesomeIconCode(faIconName, iconName, packageName)),
      })
      this.push(iconFile)
    }

    const iconNames = faIconNames.map((faIconName) => faIconName.replace(/^fa/, ''))

    const ourIndexFile = new Vinyl({
      cwd: indexFile.cwd,
      base: base,
      path: path.resolve(__dirname, '../src/MLIcon', `font-awesome-${iconStyleSuffix.toLowerCase()}-icons.js`),
      contents: Buffer.from(generateFontAwesomeIconIndexCode(iconNames, iconStyleSuffix)),
    })
    this.push(ourIndexFile)

    return cb(null, null)
  })
}

function generateIconFiles({ base }) {
  return merge(
    gulp.src(path.resolve(__dirname, '../node_modules', '@fortawesome/free-solid-svg-icons/index.js'))
      .pipe(gulpEval())
      .pipe(generateFontAwesomeIconFiles('@fortawesome/free-solid-svg-icons', 'Solid', { base })),
    gulp.src(path.resolve(__dirname, '../node_modules', '@fortawesome/free-regular-svg-icons/index.js'))
      .pipe(gulpEval())
      .pipe(generateFontAwesomeIconFiles('@fortawesome/free-regular-svg-icons', 'Regular', { base })),
    gulp.src(path.resolve(__dirname, '../node_modules', '@ant-design/icons/lib/icons/index.js'))
      .pipe(gulpEval())
      .pipe(generateAntIconFiles()),
  ).pipe(dedupe({ error: true }))
}

gulp.task('generate-icon-files', () => {
  console.log('Generating icon files...')
  const iconFolderPath = path.resolve(__dirname, '..', 'src/MLIcon')
  return generateIconFiles({ base: iconFolderPath })
    .pipe(gulp.dest(iconFolderPath))
})

module.exports = generateIconFiles
