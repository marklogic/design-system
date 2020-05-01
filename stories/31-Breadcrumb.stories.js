import React from 'react'
import { action } from '@storybook/addon-actions'
import MLBreadcrumb from '@marklogic/design-system/ml-breadcrumb'
import { withKnobs } from '@storybook/addon-knobs'

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
  return (
    <MLBreadcrumb>
      <MLBreadcrumb.MLItem>Home</MLBreadcrumb.MLItem>
      <MLBreadcrumb.MLItem>
        <a href=''>Application Center</a>
      </MLBreadcrumb.MLItem>
      <MLBreadcrumb.MLItem>
        <a href=''>Application List</a>
      </MLBreadcrumb.MLItem>
      <MLBreadcrumb.MLItem>An Application</MLBreadcrumb.MLItem>
    </MLBreadcrumb>
  )
}
