import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLRate } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'
import mdx from './39-Rate.mdx'

export default {
  title: 'Rate',
  decorators: [withKnobs],
  parameters: {
    fileName: '39-Rate.stories.jsx',
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
  return (<MLRate {...props} />)
}
