import React from 'react'
import { action } from '@storybook/addon-actions'
import MLConfigProvider from '../src/ml-config-provider'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Other/MLConfigProvider',
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
  return (<MLConfigProvider {...props} />)
}
