import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { MLConfigProvider } from '@marklogic/design-system'
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
  return (
    <div>
      <div>This component doesn't seem to allow updates in Storybook, so here are some static examples:</div>
      <div>TODO: Consider using this for global settings that are spec'd in the tickets</div>
    </div>
  )
}
