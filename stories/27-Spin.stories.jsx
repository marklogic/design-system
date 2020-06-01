import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLSpin } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'
import mdx from './27-Spin.mdx'

export default {
  title: 'Feedback/MLSpin',
  decorators: [withKnobs],
  parameters: {
    fileName: '27-Spin.stories.jsx',
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
  }
  return (<MLSpin {...props} />)
}
