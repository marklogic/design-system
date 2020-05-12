import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLCard, MLCol, MLRow } from '@marklogic/design-system'
import { withKnobs, radios, text, select, boolean } from '@storybook/addon-knobs'
import { PlusCircleOutlined } from '@marklogic/design-system/MLIcon'

export default {
  title: 'Data Display/MLCard',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const showExtra = boolean('show extra', true)
  const backgroundColor = radios('Background color', ['light', 'dark'], 'light')
  const props = {
    title: text('title', 'Card Title'),
    bordered: backgroundColor === 'light',
    size: radios('size', ['default', 'small'], 'small'),
    extra: showExtra ? (<a href='#' onClick={(e) => (e).preventDefault()}>More</a>) : null,
    //   null: null,
    //   link: ,
    //   icon: (<PlusCircleOutlined />),
    // }, null),
    style: { width: 300 },
    actions: null,
    activeTabKey: null,
    headStyle: {},
    bodyStyle: {},
    cover: null,
    defaultActiveTabKey: null,
    tabList: null,
    tabBarExtraContent: null,
    type: null,
    onTabChange: null,
  }
  return (
    <div style={{ backgroundColor: (backgroundColor === 'light' ? 'white' : '#333'), padding: '30px' }}>
      <MLCard {...props}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </MLCard>
    </div>
  )
}

export const cardInColumn = () => {
  return (
    <div className='site-card-wrapper'>
      <MLRow gutter={16}>
        <MLCol span={8}>
          <MLCard title='Card title' bordered={false}>
            Card content
          </MLCard>
        </MLCol>
        <MLCol span={8}>
          <MLCard title='Card title' bordered={false}>
            Card content
          </MLCard>
        </MLCol>
        <MLCol span={8}>
          <MLCard title='Card title' bordered={false}>
            Card content
          </MLCard>
        </MLCol>
      </MLRow>
    </div>
  )
}
