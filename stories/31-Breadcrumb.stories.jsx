import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLBreadcrumb } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'
import mdx from './31-Breadcrumb.mdx'

export default {
  title: 'Navigation/MLBreadcrumb',
  decorators: [withKnobs],
  parameters: {
    fileName: '31-Breadcrumb.stories.jsx',
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
