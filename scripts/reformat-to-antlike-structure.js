const { pascalCase } = require('change-case')
const fs = require('fs')
const path = require('path')

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

function transformComponentCode(code) {
  return code.replace(/import '([./a-zA-Z-]+).(less|css)'/, "import './style'")
    .replace("'./ml-icon'", "'../ml-icon'")
}

function transformStyleCode(oldStyleCode) {
  return oldStyleCode.replace(/@import '.\/styles.less'/, "@import '../../styles.less'")
}

for (const componentFile of filesToMove) {
  const componentName = pascalCase(componentFile.replace('ml-', 'm-l-').replace('.js', ''))

  const componentPath = path.resolve(__dirname, '../src', componentFile)
  const newComponentIndexFile = path.resolve(__dirname, '../src', componentName, 'index.js')
  const newComponentFile = path.resolve(__dirname, '../src', componentName, componentName + '.js')
  const newStyleFile = path.resolve(__dirname, '../src', componentName, 'style', 'index.less')
  const newStyleIndexJsFile = path.resolve(__dirname, '../src', componentName, 'style', 'index.js')

  const oldComponentCode = fs.readFileSync(componentPath).toString()
  const newComponentCode = transformComponentCode(oldComponentCode)

  const newComponentIndexCode = (
`import ${componentName} from './${componentName}'
export default ${componentName}
`
  )

  const componentDir = path.resolve(__dirname, '../src', componentName)
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir)
  }

  // Write the Component/index.js file
  if (!fs.existsSync(newComponentIndexFile)) {
    fs.writeFileSync(newComponentIndexFile, newComponentIndexCode)
  }

  // Write the Component/Component.js file
  if (!fs.existsSync(newComponentFile)) {
    fs.writeFileSync(newComponentFile, newComponentCode)
  }

  const oldStyleFile = componentFile.replace('.js', '.less')
  const oldStylePath = path.resolve(__dirname, '../src', oldStyleFile)
  if (fs.existsSync(oldStylePath)) {
    const styleDir = path.resolve(componentDir, 'style')
    if (!fs.existsSync(styleDir)) {
      fs.mkdirSync(styleDir)
    }

    const oldStyleCode = fs.readFileSync(oldStylePath).toString()
    const newStyleCode = transformStyleCode(oldStyleCode)

    // Write the Component/style/index.less file
    if (!fs.existsSync(newStyleFile)) {
      fs.writeFileSync(newStyleFile, newStyleCode)
    }

    const newStyleIndexJsCode = "import './index.less'\n"

    // Write the Component/style/index.js file
    if (!fs.existsSync(newStyleIndexJsFile)) {
      fs.writeFileSync(newStyleIndexJsFile, newStyleIndexJsCode)
    }
  }

  // Update src/index.js
  const indexPath = path.resolve(__dirname, '../src/index.js')
  const oldIndexCode = fs.readFileSync(indexPath).toString()
  const newIndexCode = oldIndexCode.replace(componentFile.replace('.js', ''), componentName)
  fs.writeFileSync(indexPath, newIndexCode)
}
