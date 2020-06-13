import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, number, withKnobs } from '@storybook/addon-knobs'
import { MLBadge } from '@marklogic/design-system'
import ClockCircleOutlined from '../src/MLIcon/ClockCircleOutlined'
import NotificationOutlined from '../src/MLIcon/NotificationOutlined'
import mdx from './47-Badge.mdx'

export default {
  title: 'Data Display/MLBadge',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
    fileName: '47-Badge.stories.jsx',
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
    overflowCount: number('overflowCount', 99),
  }
  return (
    <div className='badge-stories'>
      <MLBadge count={number('count', 5)} {...props}>
        <a href='#' className='head-example' />
      </MLBadge>
      <MLBadge count={0} showZero>
        <a href='#' className='head-example' />
      </MLBadge>
      <MLBadge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
        <a href='#' className='head-example' />
      </MLBadge>
      <style>{`
.badge-stories .head-example {
  width: 42px;
  height: 42px;
  border-radius: 2px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
}

.badge-stories .ant-badge:not(.ant-badge-not-a-wrapper) {
  margin-right: 20px;
}
      `}
      </style>
    </div>
  )
}

export const standalone = () => {
  return (
    <div className='badge-stories'>
      <MLBadge count={25} />
      <MLBadge count={4} className='site-badge-count-4' />
      <MLBadge className='site-badge-count-109' count={109} style={{ backgroundColor: '#52c41a' }} />
      <style>{`
.badge-stories .site-badge-count-4 .ant-badge-count {
  background-color: #fff;
  color: #999;
  box-shadow: 0 0 0 1px #d9d9d9 inset;
}
`}
      </style>
    </div>
  )
}

export const smallDot = () => {
  return (
    <div className='badge-stories'>
      <MLBadge dot>
        <NotificationOutlined />
      </MLBadge>
      <MLBadge count={0} dot>
        <NotificationOutlined />
      </MLBadge>
      <MLBadge dot={boolean('dot', true)}>
        <a href='#'>Link something</a>
      </MLBadge>
      <style>{`
.badge-stories .ant-badge:not(.ant-badge-not-a-wrapper) {
  margin-right: 20px;
}
`}
      </style>
    </div>
  )
}

export const status = () => {
  return (
    <div>
      <MLBadge status='success' />
      <MLBadge status='error' />
      <MLBadge status='default' />
      <MLBadge status='processing' />
      <MLBadge status='warning' />
      <br />
      <MLBadge status='success' text='Success' />
      <br />
      <MLBadge status='error' text='Error' />
      <br />
      <MLBadge status='default' text='Default' />
      <br />
      <MLBadge status='processing' text='Processing' />
      <br />
      <MLBadge status='warning' text='Warning' />
    </div>
  )
}
