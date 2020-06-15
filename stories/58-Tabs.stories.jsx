import React from 'react'
import { action } from '@storybook/addon-actions'
import { radios, withKnobs } from '@storybook/addon-knobs'
import { MLTabs } from '@marklogic/design-system'
import mdx from './58-Tabs.mdx'

export default {
  title: 'Data Display/MLTabs',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
    fileName: '58-Tabs.stories.jsx',
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
    tabPosition: radios('tabPosition', ['left', 'top', 'right', 'bottom'], 'top'),
    size: radios('size', ['small', 'default', 'large'], 'default'),
  }
  return (
    <MLTabs defaultActiveKey='1' onChange={action('onChange')} {...props}>
      <MLTabs.MLTabPane tab='Tab 1' key='1'>
        Content of Tab Pane 1
      </MLTabs.MLTabPane>
      <MLTabs.MLTabPane tab='Tab 2' key='2'>
        Content of Tab Pane 2
      </MLTabs.MLTabPane>
      <MLTabs.MLTabPane tab='Tab 3' key='3'>
        Content of Tab Pane 3
      </MLTabs.MLTabPane>
    </MLTabs>
  )
}
