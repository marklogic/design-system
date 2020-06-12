import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLUpload, MLButton, MLIcon } from '@marklogic/design-system'
import { message } from 'antd'
import { withKnobs } from '@storybook/addon-knobs'
import mdx from './46-Upload.mdx'

export default {
  title: 'Data Entry/MLUpload',
  decorators: [withKnobs],
  parameters: {
    fileName: '46-Upload.stories.jsx',
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
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }
  return (
    <MLUpload {...props}>
      <MLButton>
        <MLIcon.UploadOutlined /> Click to Upload
      </MLButton>
    </MLUpload>
  )
}
