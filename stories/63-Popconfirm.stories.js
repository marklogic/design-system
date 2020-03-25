import React from 'react'
import { action } from '@storybook/addon-actions'
import MLPopconfirm from '../src/ml-popconfirm'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Feedback/MLPopconfirm',
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
  return (<MLPopconfirm {...props} />)
}
