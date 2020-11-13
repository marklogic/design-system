import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLCheckbox } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'
import mdx from './7-Checkbox.mdx'

export default {
  title: 'Checkbox',
  decorators: [withKnobs],
  parameters: {
    fileName: '7-Checkbox.stories.jsx',
    docs: {
      page: mdx,
    },
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
