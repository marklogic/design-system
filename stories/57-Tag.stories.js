import React from 'react'
import { action } from '@storybook/addon-actions'
import MLTag from '../src/ml-tag'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Data Display/MLTag',
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
  return (<MLTag {...props} />)
}
