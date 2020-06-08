const gulp = require('gulp')
const through = require('through2')
const merge = require('merge-stream')
const path = require('path')
const Vinyl = require('vinyl')
const gulpEval = require('gulp-eval')
const dedupe = require('gulp-dedupe')

const generateAntIconIndexCode = (iconNames, packageName) => {
  return (
`import { createWrappedMLIcon } from './icon-wrappers'

import * as AntIcons from '${packageName}'

${iconNames.map((iconName) => (
`export const ${iconName} = createWrappedMLIcon(AntIcons.${iconName})`
)).join('\n')}
`
  )
}

const generateFontAwesomeIconIndexCode = (iconNames, iconStyleSuffix, packageName) => {
  return (
`import React from 'react'
import * as faIcons from '${packageName}'

import { wrapFontAwesomeIcon } from './icon-wrappers'

${iconNames.map((iconName) => {
// Patch icon names that start with numbers
const prefixedIconName = /^\d.*/.test(iconName) ? `fa${iconName}` : iconName
return (
`export const ${prefixedIconName}${iconStyleSuffix} = wrapFontAwesomeIcon(faIcons.fa${iconName}, '${iconStyleSuffix}')`
)
}).join('\n')}
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

const generateFontAwesomeIconCode = (faIconName, wrappedIconName, packageName, iconStyleSuffix) => {
  return (
`import { wrapFontAwesomeIcon } from './icon-wrappers'
import { ${faIconName} } from '${packageName}/${faIconName}'
const ${wrappedIconName} = wrapFontAwesomeIcon(${faIconName}, '${iconStyleSuffix}')
export default ${wrappedIconName}
`
  )
}

const generateAntIconFiles = (packageName) => {
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
      contents: Buffer.from(generateAntIconIndexCode(iconNames, packageName)),
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
      let iconName = faIconName.replace(/^fa/, '') + iconStyleSuffix
      if (/^\d.*/.test(iconName)) {
        // Patch icons that start with numbers
        iconName = '_' + iconName
      }
      const iconFile = new Vinyl({
        cwd: cwd,
        base: base,
        path: path.resolve(base, iconName + '.js'),
        contents: Buffer.from(generateFontAwesomeIconCode(faIconName, iconName, packageName, iconStyleSuffix)),
      })
      this.push(iconFile)
    }

    const iconNames = faIconNames.map((faIconName) => faIconName.replace(/^fa/, ''))

    const ourIndexFile = new Vinyl({
      cwd: indexFile.cwd,
      base: base,
      path: path.resolve(__dirname, '../src/MLIcon', `font-awesome-${iconStyleSuffix.toLowerCase()}-icons.js`),
      contents: Buffer.from(generateFontAwesomeIconIndexCode(iconNames, iconStyleSuffix, packageName)),
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

    gulp.src(path.resolve(__dirname, '../node_modules', '@fortawesome/free-brands-svg-icons/index.js'))
      .pipe(gulpEval())
      .pipe(generateFontAwesomeIconFiles('@fortawesome/free-brands-svg-icons', 'Brand', { base })),

    gulp.src(path.resolve(__dirname, '../node_modules', '@ant-design/icons/lib/icons/index.js'))
      .pipe(gulpEval())
      .pipe(generateAntIconFiles('@ant-design/icons')),
  ).pipe(dedupe({ error: true }))
}

// Run this when @ant-design/icons or any of the @fortawesome packages are updated with new icons, to add those to this library
gulp.task('generate-icon-files', () => {
  console.log('Generating icon files...')
  const iconFolderPath = path.resolve(__dirname, '..', 'src/MLIcon')
  return generateIconFiles({ base: iconFolderPath })
    .pipe(gulp.dest(iconFolderPath))
})

module.exports = generateIconFiles
