import React from 'react'
import { action } from '@storybook/addon-actions'
import MLGrid from '../src/ml-grid'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Layout/MLGrid',
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
  return (<MLGrid {...props} />)
}
