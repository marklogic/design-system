import React, { useState } from 'react'
import { MLModal, MLButton } from '@marklogic/design-system'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { Modal } from 'antd'

export default {
  title: 'Feedback/MLModal',
  component: MLModal,
  decorators: [withKnobs],
}

export const Basic = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <MLButton type='primary' onClick={() => setVisible(true)}>
        Open Modal
      </MLButton>
      <MLModal
        title={text('title', 'Basic Modal')}
        visible={visible}
        closable={boolean('closable', true)}
        onOk={() => setVisible(false)}
        okText={text('okText', 'OK')}
        onCancel={() => setVisible(false)}
        cancelText={text('cancelText', 'Cancel')}
        okType={text('okType', 'primary')}
      >
        <h3>Contents</h3>
        <div>Your text here.</div>
      </MLModal>
    </div>
  )
}

Basic.story = {
  parameters: {
    docs: {
      storyDescription: 'Default MLModal has "Cancel" and "OK" buttons.',
    },
  },
}

function info() {
  MLModal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  })
}

function success() {
  MLModal.success({
    content: 'some messages...some messages...',
  })
}

function error() {
  MLModal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  })
}

function warning() {
  MLModal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  })
}

export const AlertModals = () => {
  return (
    <div>
      <MLButton onClick={info}>Info</MLButton>
      <MLButton onClick={success}>Success</MLButton>
      <MLButton onClick={error}>Error</MLButton>
      <MLButton onClick={warning}>Warning</MLButton>
    </div>
  )
}
