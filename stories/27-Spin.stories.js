import React from 'react'
import { action } from '@storybook/addon-actions'
import MLSpin from '../src/ml-spin'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Feedback/MLSpin',
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
  return (<MLSpin {...props} />)
}
