import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLAlert } from '@marklogic/design-system'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import mdx from './24-Alert.mdx'

export default {
  title: 'Feedback/MLAlert',
  decorators: [withKnobs],
  parameters: {
    fileName: '24-Alert.stories.jsx',
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
    description: text('description', 'Some description'),
    closable: boolean('closable', false),
    showIcon: boolean('showIcon', true),
  }
  return (
    <div>
      <MLAlert message='Success Text' type='success' {...props} />
      <MLAlert message='Info Text' type='info' {...props} />
      <MLAlert message='Warning Text' type='warning' {...props} />
      <MLAlert message='Error Text' type='error' {...props} />
    </div>
  )
}
