import React from 'react'
import { action } from '@storybook/addon-actions'
import MLCheckbox from '@marklogic/design-system/ml-checkbox'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Data Entry/MLCheckbox',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
    onChange: action('onChange'),
  }
  return (
    <MLCheckbox {...props}>Checkbox</MLCheckbox>
  )
}
