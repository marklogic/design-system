import React from 'react'
import { action } from '@storybook/addon-actions'
import MLAlert from '../src/ml-alert'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Feedback/Alert',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here'
    }
  }
}

export const basic = () => {
  const props = {
  }
  return (<MLAlert {...props} />)
}
