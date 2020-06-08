import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { MLTimePicker } from '@marklogic/design-system'
import mdx from './45-MLTimePicker.mdx'

export default {
  title: 'Data Entry/MLTimePicker',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx
    },
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  return (
    <MLTimePicker />
  )
}
