import React from 'react'
import { action } from '@storybook/addon-actions'
import MLCarousel from '../src/ml-carousel'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Data Display/MLCarousel',
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
  return (<MLCarousel {...props} />)
}
