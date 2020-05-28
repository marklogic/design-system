import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { MLDescriptions } from '@marklogic/design-system'

export default {
  title: 'Data Display/MLDescriptions',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  return (
    <MLDescriptions />
  )
}
