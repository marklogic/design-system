import React from 'react'
import { action } from '@storybook/addon-actions'
import MLNotification from '../src/ml-notification'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Feedback/MLNotification',
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
  return (<MLNotification {...props} />)
}
