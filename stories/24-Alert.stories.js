import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLAlert } from 'marklogic-ui-library'
import { withKnobs, text, boolean, optionsKnob as options } from '@storybook/addon-knobs'
import { CheckCircleFilled, InfoCircleFilled, ExclamationCircleFilled, CloseCircleFilled } from 'marklogic-ui-library/ml-icon'

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
      <MLAlert message='Success Text' type='success' {...props} />
      <MLAlert message='Info Text' type='info' {...props} />
      <MLAlert message='Warning Text' type='warning' {...props} />
      <MLAlert message='Error Text' type='error' {...props} />
    </div>
  )
}
