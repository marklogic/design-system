import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import { MLTimePicker } from '@marklogic/design-system'
// import mdx from './45-TimePicker.mdx'

export default {
  title: 'Data Entry/MLTimePicker',
  decorators: [withKnobs],
  parameters: {
    // docs: {
    //   page: mdx, // TODO: Uncomment when documentation branch is merged
    // },
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
