const { pascalCase, paramCase } = require('change-case')
const fs = require('fs-extra')
const path = require('path')
const { execSync } = require('child_process')

const filesToMove = [
  'ml-alert.js',
  'ml-autocomplete.js',
  'ml-breadcrumb.js',
  'ml-button.js',
  'ml-carousel.js',
  'ml-checkbox.js',
  'ml-col.js',
  'ml-collapse.js',
  'ml-config-provider.js',
  'ml-date-picker.js',
  'ml-divider.js',
  'ml-input-number.js',
  'ml-layout.js',
  'ml-mention.js',
  'ml-page-header.js',
  'ml-popconfirm.js',
  'ml-radio.js',
  'ml-rate.js',
  'ml-row.js',
  'ml-slider.js',
  'ml-spin.js',
  'ml-table.js',
  'ml-tag.js',
  'ml-tooltip.js',
  'ml-upload.js',
]

const inputDir = path.resolve(__dirname, '../src')
const outputDir = path.resolve(__dirname, '../src')
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir)
}

function transformComponentCode(code) {
  return code.replace(/import '([./a-zA-Z-]+).(less|css)'/, "import './style'")
    .replace("'./ml-icon'", "'../MLIcon'")
}

function transformStyleCode(oldStyleCode) {
  return oldStyleCode.replace(/@import '.\/styles.less'/, "@import '../../styles.less'")
    .replace(/@import 'antd\/[^']*';\n/g, '')
}

const oldIndexPath = path.resolve(inputDir, 'index.js')
const newIndexPath = path.resolve(outputDir, 'index.js')
const oldIndexCode = fs.readFileSync(oldIndexPath).toString()
let newIndexCode = oldIndexCode.toString()

function writeStyleFiles(componentFile, componentDir, componentName, customTransform) {
  const newStyleFile = path.resolve(outputDir, componentName, 'style', 'index.less')
  const oldStyleFile = componentFile.replace('.js', '') + '.less'
  const oldStylePath = path.resolve(inputDir, oldStyleFile)
  // if (fs.existsSync(oldStylePath) || true) {
  const styleDir = path.resolve(componentDir, 'style')
  const newStyleIndexJsFile = path.resolve(outputDir, componentName, 'style', 'index.js')

  if (!fs.existsSync(styleDir)) {
    fs.mkdirSync(styleDir)
  }

  const oldStyleCode = (
    fs.existsSync(oldStylePath)
      ? fs.readFileSync(oldStylePath).toString()
      : ''
  )
  const newStyleCode = transformStyleCode(oldStyleCode)
  // if (customTransform !== undefined) {
  //   newStyleCode = customTransform(newStyleCode)
  // }

  // Write the Component/style/index.less file
  console.log(`git mv ${oldStylePath} ${newStyleFile}`)
  if (fs.existsSync(oldStylePath)) {
    execSync(`git mv ${oldStylePath} ${newStyleFile}`)
  }
  // fs.writeFileSync(newStyleFile, newStyleCode)

  const newStyleIndexJsCode = (
`import 'antd/es/${paramCase(componentName).replace('ml-', '')}/style'
import './index.less'
`
  )

  // Write the Component/style/index.js file
  fs.writeFileSync(newStyleIndexJsFile, newStyleIndexJsCode)
}

function writeComponentFiles(componentName, componentPath, componentDir) {
  const newComponentIndexFile = path.resolve(outputDir, componentName, 'index.js')
  const newComponentFile = path.resolve(outputDir, componentName, componentName + '.js')

  const oldComponentCode = fs.readFileSync(componentPath).toString()
  const newComponentCode = transformComponentCode(oldComponentCode)

  const newComponentIndexCode = (
    `import ${componentName} from './${componentName}'
export default ${componentName}
`
  )

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir)
  }

  // Write the Component/index.js file
  if (!fs.existsSync(newComponentIndexFile)) {
    fs.writeFileSync(newComponentIndexFile, newComponentIndexCode)
  }

  // Write the Component/Component.js file

  console.log(`git mv ${componentPath} ${newComponentFile}`)
  execSync(`git mv ${componentPath} ${newComponentFile}`)
  if (!fs.existsSync(newComponentFile)) {
    fs.writeFileSync(newComponentFile, newComponentCode)
  }
}

for (const componentFile of filesToMove) {
  const componentName = pascalCase(componentFile.replace('ml-', 'm-l-').replace('.js', ''))

  const componentPath = path.resolve(inputDir, componentFile)
  const componentDir = path.resolve(outputDir, componentName)

  writeComponentFiles(componentName, componentPath, componentDir)

  writeStyleFiles(
    componentFile,
    componentDir,
    componentName,
    // (code) => {
    //   return code.replace("import '../ml-icon.less'", "import './")
    // }
  )

  // Update index.js code before writing it later
  newIndexCode = newIndexCode.replace(componentFile.replace('.js', ''), componentName)
}

{
  // rename MLIcon
  const componentName = 'MLIcon'
  const componentFile = 'ml-icon'
  const componentDir = path.resolve(outputDir, componentName)

  newIndexCode = newIndexCode.replace(componentFile.replace('.js', ''), componentName)

  const oldComponentPath = path.resolve(inputDir, 'ml-icon')
  const newComponentPath = path.resolve(outputDir, 'MLIcon')

  console.log(`git mv ${oldComponentPath} ${newComponentPath}`)
  execSync(`git mv ${oldComponentPath} ${newComponentPath}`)
  // fs.copySync(
  //   oldComponentPath,
  //   newComponentPath,
  //   { overwrite: true },
  // )

  const newComponentIndexPath = path.resolve(newComponentPath, 'index.js')
  // execSync(`git mv ${newComponentPath}/ml-icon.js ${newComponentIndexPath}`)
  fs.writeFileSync(
    newComponentIndexPath,
    fs.readFileSync(newComponentIndexPath).toString().replace("import '../ml-icon.less'", "import './style'"),
  )

  writeStyleFiles(componentFile, componentDir, componentName)
  // TODO: Extract stuff into functions, then create the style folder for MLIcon and copy ml-icon.less in
}

// Write the updated index.js
fs.writeFileSync(newIndexPath, newIndexCode)

{
  const oldStyleIndexPath = path.resolve(inputDir, 'styles.less')
  const newStyleIndexPath = path.resolve(outputDir, 'styles.less')
  fs.writeFileSync(
    newStyleIndexPath,
    fs.readFileSync(oldStyleIndexPath).toString().replace(
      "@import 'antd/es/style/index.less';\n",
      '',
    ),
  )
}
