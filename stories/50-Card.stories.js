import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLCard, MLCol, MLRow, MLCollapse } from '@marklogic/design-system'
import '@marklogic/design-system/MLCard/style'
import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined, PlusCircleFilled, CloseOutlined, PlayCircleFilled } from '@marklogic/design-system/MLIcon'
import { withKnobs, radios, text, boolean } from '@storybook/addon-knobs'

// TODO: Use MLAvatar once it exists
import { Avatar as MLAvatar } from 'antd'

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

export const withActions = () => {
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

export const examples = () => {
  return (
    <div>
      <MLCard style={{ width: 300 }} className='primary-color'>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <PlusCircleFilled style={{ fontSize: '75px' }} />
          <div style={{ marginTop: '22px', fontSize: '22px' }}>Add New</div>
        </div>
      </MLCard>
      <MLCard
        style={{ width: 300 }}
        // eslint-disable-next-line react/jsx-key
        actions={[<SettingOutlined />, <EditOutlined />, <DeleteOutlined />]}
      >
        <div style={{ height: 110, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>JSON</div>
            <div>
              <div style={{ fontSize: '20px' }}>load1</div>
              <div>Last Updated: 03/08/2020 1:03PM</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div>Files</div>
            <div style={{ fontSize: '20px' }}>3</div>
          </div>
        </div>
      </MLCard>
      <MLCollapse bordered defaultActiveKey={['1']}>
        <MLCollapse.MLPanel header='flow1' key='1' extra={<DeleteOutlined />}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {[1, 2].map((i) => (
              <MLCard
                style={{ width: 300 }}
                title='Load'
                extra={
                  <div style={{ marginTop: '3px' }}>
                    <PlayCircleFilled style={{ fontSize: '18px', marginRight: '10px' }} />
                    <CloseOutlined style={{ fontSize: '18px' }} />
                  </div>
                }
                className='mini-card-example'
              >
                <MLCard style={{ margin: 0 }}>JSON load{i}</MLCard>
              </MLCard>
            ))}
          </div>
        </MLCollapse.MLPanel>
      </MLCollapse>
      <style>{`
.primary-color {
  color: #5B69AF; // In production, use the less variable instead
}
.ml-card {
  margin: 10px;
}
.mini-card-example {
  border: 1px dashed #e8e8e8;
}
.mini-card-example .ant-card-head {
  border: none;
}
`}
      </style>
    </div>
  )
}
