import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLCard, MLCol, MLRow, MLCollapse } from '@marklogic/design-system'
import '@marklogic/design-system/MLCard/style'
import EditOutlined from '../src/MLIcon/EditOutlined'
import EllipsisOutlined from '../src/MLIcon/EllipsisOutlined'
import SettingOutlined from '../src/MLIcon/SettingOutlined'
import DeleteOutlined from '../src/MLIcon/DeleteOutlined'
import PlusCircleFilled from '../src/MLIcon/PlusCircleFilled'
import CloseOutlined from '../src/MLIcon/CloseOutlined'
import PlayCircleFilled from '../src/MLIcon/PlayCircleFilled'
import { withKnobs, radios, text, boolean } from '@storybook/addon-knobs'
import mdx from './50-Card.mdx'

// TODO: Use MLAvatar once it exists
import { Avatar as MLAvatar } from 'antd'

export default {
  title: 'Data Display/MLCard',
  decorators: [withKnobs],
  parameters: {
    fileName: '50-Card.stories.jsx',
    docs: {
      page: mdx,
    },
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

export const withActionsAndMeta = () => {
  return (
    <div>
      <MLCard
        style={{ width: 500 }}
        cover={
          <img
            alt='example'
            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          />
        }
        actions={[
          <SettingOutlined key='setting' />,
          <EditOutlined key='edit' />,
          <EllipsisOutlined key='ellipsis' />,
        ]}
      >
        <MLCard.MLMeta
          avatar={<MLAvatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
          title='Card title'
          description='This is the description'
        />
      </MLCard>
    </div>
  )
}
