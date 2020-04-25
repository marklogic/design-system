import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { MLLayout } from 'marklogic-ui-library'
const { MLHeader, MLFooter, MLSider, MLContent } = MLLayout

export default {
  title: 'Layout/MLLayout',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const dataHubLayout = (props) => {
  const graphicBackground = boolean('graphicBackground', true)
  const layoutStyle = graphicBackground ? { backgroundImage: 'linear-gradient(to right, #af474a, #73263b)' } : null
  return (
    <MLLayout>
      <MLHeader>Header</MLHeader>
      <MLLayout>
        <MLLayout style={layoutStyle}>
          <MLContent style={{ height: '300px' }}>Content</MLContent>
          <MLFooter graphicBackground={graphicBackground} year={2019}>Footer</MLFooter>
        </MLLayout>
        <MLSider>Sider</MLSider>
      </MLLayout>
    </MLLayout>
  )
}

export const generalLayout = (props) => {
  const graphicBackground = boolean('graphicBackground', true)
  const layoutStyle = graphicBackground ? { backgroundImage: 'linear-gradient(to right, #af474a, #73263b)' } : null
  return (
    <MLLayout style={layoutStyle}>
      <MLHeader>Header</MLHeader>
      <MLContent style={{ height: '300px' }}>Content</MLContent>
      <MLFooter graphicBackground={graphicBackground} year={2019}>Footer</MLFooter>
    </MLLayout>
  )
}
