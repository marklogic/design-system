import React from 'react'
import { action } from '@storybook/addon-actions'
import MLMention from '../src/ml-mention'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Data Entry/MLMention',
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
  return (<MLMention {...props} />)
}
