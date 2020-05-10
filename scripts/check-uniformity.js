const fs = require('fs-extra')
const path = require('path')
const _ = require('lodash')

const DRY_RUN = true

const componentNames = fs.readdirSync(path.resolve(__dirname, '../src')).filter((name) => name.startsWith('ML'))

function insertStyleImport(componentName, code) {
  if (!code.includes("import './style'")) {
    console.log(`${componentName}/${childComponentName} needs to import style`)

    const importMatches = [...(code).matchAll(/import[^\n]*\n/g)]
    const lastMatch = _.last(importMatches)
    const insertPosition = lastMatch.index + lastMatch[0].length

    const newCode = code.slice(0, insertPosition) + "import './style'\n" + code.slice(insertPosition)
    console.log(newCode)

    return newCode
  }
}

for (const componentName of componentNames) {
  const componentFolderPath = path.resolve(__dirname, '../src', componentName)
  const childComponentNames = fs.readdirSync(componentFolderPath).filter((name) => name.startsWith('ML'))

  for (const childComponentName of childComponentNames) {
    const childComponentFilePath = path.resolve(__dirname, '../src', componentName, childComponentName)

    if (!fs.existsSync(childComponentFilePath)) {
      console.log("Couldn't find file: " + childComponentName)
      console.log(childComponentFilePath)
      continue
    }

    const code = fs.readFileSync(childComponentFilePath).toString()

    const newCode = insertStyleImport(childComponentName, code)

    if (!DRY_RUN) {
      fs.writeFileSync(childComponentFilePath, newCode)
    }
    // console.log(code.toString())
  }
}
