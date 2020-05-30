import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLAlert } from '@marklogic/design-system'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Feedback/Alert',
  decorators: [withKnobs],
  parameters: {
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
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      <MLAlert message='Success Text' type='success' {...props} />
      <MLAlert message='Info Text' type='info' {...props} />
      <MLAlert message='Warning Text' type='warning' {...props} />
      <MLAlert message='Error Text' type='error' {...props} />
    </div>
  )
}
