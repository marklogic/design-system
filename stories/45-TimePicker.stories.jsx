import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import { MLTimePicker } from '@marklogic/design-system'
import mdx from './45-TimePicker.mdx'

export default {
  title: 'Data Entry/MLTimePicker',
  decorators: [withKnobs],
  parameters: {
    fileName: '45-TimePicker.stories.jsx',
    docs: {
      page: mdx,
    },
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
    hourLabel: text('hourLabel', 'Hr'),
    minuteLabel: text('minuteLabel', 'Min'),
    secondLabel: text('secondLabel', 'Sec'),
    format: text('format', 'HH:mm:ss'),
  }
  return (
    <MLTimePicker
      {...props}
    />
  )
}
