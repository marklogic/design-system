import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLAlert } from 'marklogic-ui-library'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Feedback/Alert',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here'
    }
  }
}

export const basic = () => {
  const props = {
  }
  return (<MLAlert {...props} />)
}
