import React from 'react'
import { action } from '@storybook/addon-actions'
import MLTooltip from '../src/ml-tooltip'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Data Display/MLTooltip',
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
  return (<MLTooltip {...props} />)
}
