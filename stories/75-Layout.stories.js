import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { MLLayout } from '../src'
const { MLHeader, MLFooter, MLSider, MLContent } = MLLayout

export default {
  title: 'Layout/MLLayout',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here'
    }
  }
}

export const dataHubLayout = (props) => {
  return (
    <MLLayout>
      <MLHeader>Header</MLHeader>
      <MLLayout>
        <MLLayout>
          <MLContent style={{ height: '300px' }}>Content</MLContent>
          <MLFooter>Footer</MLFooter>
        </MLLayout>
        <MLSider>Sider</MLSider>
      </MLLayout>
    </MLLayout>
  )
}

export const generalLayout = (props) => {
  return (
    <MLLayout>
      <MLHeader>Header</MLHeader>
      <MLContent style={{ height: '300px' }}>Content</MLContent>
      <MLFooter>Footer</MLFooter>
    </MLLayout>
  )
}
