import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, number } from '@storybook/addon-knobs'
import { MLButton, mlmessage } from '@marklogic/design-system'
import SmileOutlined from '@ant-design/icons/lib/icons/SmileOutlined'
import mdx from './60-message.mdx'

export default {
  title: 'Feedback/mlmessage',
  decorators: [withKnobs],
  parameters: {
    fileName: '60-message.stories.jsx',
    docs: { // TODO: Uncomment once docs branch is merged
      page: mdx,
    },
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  mlmessage.config({
    maxCount: number('maxCount', 3),
  })
  const info = () => {
    mlmessage.info('This is an info message')
  }
  const success = () => {
    mlmessage.success('This is a success message')
  }

  const error = () => {
    mlmessage.error('This is an error message')
  }

  const warning = () => {
    mlmessage.warning('This is a warning message')
  }

  const loading = () => {
    const hide = mlmessage.loading('Action in progress..', 0)
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500)
  }

  const customIcon = () => {
    mlmessage.info({ content: 'smiley content', icon: <SmileOutlined /> })
  }

  return (
    <>
      <MLButton type='primary' onClick={info}>
        Info
      </MLButton><br />
      <MLButton onClick={success}>Success</MLButton><br />
      <MLButton onClick={error}>Error</MLButton><br />
      <MLButton onClick={warning}>Warning</MLButton><br />
      <MLButton onClick={loading}>Display a loading indicator</MLButton><br />
      <MLButton onClick={customIcon}>Custom icon</MLButton><br />
    </>
  )
}
