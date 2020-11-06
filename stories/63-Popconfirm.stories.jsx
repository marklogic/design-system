import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLPopconfirm } from '@marklogic/design-system'
import { message } from 'antd'
import { withKnobs } from '@storybook/addon-knobs'
import mdx from './63-Popconfirm.mdx'

export default {
  title: 'Popconfirm',
  decorators: [withKnobs],
  parameters: {
    fileName: '63-Popconfirm.stories.jsx',
    docs: {
      page: mdx,
    },
    info: {
      text: 'Component description goes here',
    },
  },
}

function confirm(e) {
  console.log(e)
  message.success('Click on Yes')
}

function cancel(e) {
  console.log(e)
  message.error('Click on No')
}

export const basic = () => {
  return (
    <MLPopconfirm
      title='Are you sure delete this task?'
      onConfirm={confirm}
      onCancel={cancel}
      okText='Yes'
      cancelText='No'
    >
      <a href='#'>Delete</a>
    </MLPopconfirm>
  )
}
