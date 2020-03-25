import React from 'react'
import { action } from '@storybook/addon-actions'
import MLDivider from '../src/ml-divider'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Other/MLDivider',
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
  return (<MLDivider {...props} />)
}
