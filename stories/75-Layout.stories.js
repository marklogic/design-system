import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { MLLayout } from '@marklogic/design-system'
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
    <div>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
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
    </div>
  )
}

export const generalLayout = (props) => {
  const graphicBackground = boolean('graphicBackground', true)
  const layoutStyle = graphicBackground ? { backgroundImage: 'linear-gradient(to right, #af474a, #73263b)' } : null
  return (
    <div>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      <MLLayout style={layoutStyle}>
        <MLHeader>Header</MLHeader>
        <MLContent style={{ height: '300px' }}>Content</MLContent>
        <MLFooter graphicBackground={graphicBackground} year={2019}>Footer</MLFooter>
      </MLLayout>
    </div>
  )
}
