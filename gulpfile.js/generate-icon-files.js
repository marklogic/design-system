const gulp = require('gulp')
const through = require('through2')
const merge = require('merge-stream')
const path = require('path')
const Vinyl = require('vinyl')

const generateAntIconCode = (iconName) => {
  return (
`import { createWrappedMLIcon } from './icon-wrappers'
import { ${iconName} as Ant${iconName} } from '@ant-design/icons'
const ${iconName} = createWrappedMLIcon(Ant${iconName})
export default ${iconName}`
  )
}

const generateFontAwesomeIconCode = (iconName) => {
  return (
`import * as faIcons from '@fortawesome/free-solid-svg-icons'

import { wrapFontAwesomeIcon } from './icon-wrappers'
const ${iconName} = wrapFontAwesomeIcon(faIcons.fa${iconName})
export default ${iconName}`
  )
}

const generateAntIconFiles = () => {
  return through.obj(function(indexFile, enc, cb) {
    const matches = [...indexFile.contents.toString().matchAll(/export const (?<iconName>\w+) = createWrappedMLIcon/g)]
    const iconNames = matches.map((pair) => pair[1])

    for (const iconName of iconNames) {
      const iconFile = new Vinyl({
        cwd: indexFile.cwd,
        base: indexFile.base,
        path: path.resolve(indexFile.base, 'MLIcon', iconName + '.js'),
        contents: Buffer.from(generateAntIconCode(iconName)),
      })
      this.push(iconFile)
    }
    return cb(null, null)
  })
}

const generateFontAwesomeIconFiles = () => {
  return through.obj(function(indexFile, enc, cb) {
    const matches = [...indexFile.contents.toString().matchAll(/export const (?<iconName>\w+) = wrapFontAwesomeIcon/g)]
    const iconNames = matches.map((pair) => pair[1])

    for (const iconName of iconNames) {
      const iconFile = new Vinyl({
        cwd: indexFile.cwd,
        base: indexFile.base,
        path: path.resolve(path.dirname(indexFile.path), iconName + '.js'),
        contents: Buffer.from(generateFontAwesomeIconCode(iconName)),
      })
      this.push(iconFile)
    }

    return cb(null, null)
  })
}

// module.exports = gulp.task('generate-icon-files', () => {
module.exports = function generateIconFiles() {
  console.log('Generating icon files...')
  const cwd = path.resolve(__dirname, '..')
  const base = path.resolve(__dirname, '..', 'src')
  const antStream = gulp.src('src/MLIcon/ant-icons.js', { cwd, base })
    .pipe(generateAntIconFiles())

  const faStream = gulp.src('src/MLIcon/font-awesome-icons.js', { cwd, base })
    .pipe(generateFontAwesomeIconFiles())

  return merge([antStream, faStream])
}
