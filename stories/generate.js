const fs = require('fs')
const { paramCase } = require('change-case')

var myArgs = process.argv.slice(2)
console.log('myArgs: ', myArgs)

const [issueNumber, baseComponentNameWithSection] = myArgs

const [sectionName, componentName] = baseComponentNameWithSection.split('/')

const storyTitle = `${sectionName}/ML${componentName}`

const storyFilename = `${issueNumber}-${componentName}.stories.js`
const componentFileName = `ml-${paramCase(componentName)}`
const componentFileNameWithExtension = `${componentFileName}.js`

console.log({
  issueNumber, sectionName, componentName, storyFilename, componentFileName
})

const storyTemplate = (
`import React from 'react'
import { action } from '@storybook/addon-actions'
import { ML${componentName} } from 'marklogic-ui-library'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: '${storyTitle}',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
  }
  return (<ML${componentName} {...props} />)
}
`)

const componentTemplate = (
`import React from 'react'
import PropTypes from 'prop-types'
import { ${componentName} } from 'antd'

const ML${componentName} = (props) => {
  return (
    <${componentName} {...props}>
      {props.children}
    </${componentName}>
  )
}

export default ML${componentName}
`
)

fs.writeFileSync(`./stories/${storyFilename}`, storyTemplate)
fs.writeFileSync(`./src/${componentFileNameWithExtension}`, componentTemplate)
