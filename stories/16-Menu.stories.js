import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLMenu } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Navigation/MLMenu',
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
  return (<MLMenu {...props} />)
}
