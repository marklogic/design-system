import React from 'react'
import { action } from '@storybook/addon-actions'
import MLBreadcrumb from '../src/ml-breadcrumb'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Navigation/MLBreadcrumb',
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
  return (<MLBreadcrumb {...props} />)
}
