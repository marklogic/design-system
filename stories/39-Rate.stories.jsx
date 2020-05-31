import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLRate } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Data Entry/MLRate',
  decorators: [withKnobs],
  parameters: {
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
