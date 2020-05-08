import React, { useState } from 'react'
import { MLModal, MLButton } from '@marklogic/design-system'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import {
  DraggableModalProvider,
} from 'ant-design-draggable-modal'
import { withActions } from '@storybook/addon-actions'

export default {
  title: 'Feedback/MLModal',
  component: MLModal,
  decorators: [withKnobs, withActions('click')],
}

function useVisible() {
  const [visible, setVisible] = useState(false)
  const toggle = () => setVisible(!visible)
  const show = () => setVisible(true)
  const hide = () => setVisible(false)
  return { visible, toggle, show, hide }
}

export const Basic = () => {
  const { visible, show, hide } = useVisible()
  return (
    <DraggableModalProvider>
      <MLButton type='primary' onClick={show}>
        Open Modal
      </MLButton>
      <MLModal
        title={text('title', 'Basic Modal')}
        visible={visible}
        closable={boolean('closable', true)}
        onOk={hide}
        okText={text('okText', 'OK')}
        onCancel={hide}
        cancelText={text('cancelText', 'Cancel')}
        okType={text('okType', 'primary')}
      >
        <h3>Contents</h3>
        <div>Your text here.</div>
      </MLModal>
    </DraggableModalProvider>
  )
}

Basic.story = {
  parameters: {
    docs: {
      storyDescription: 'Default MLModal has "Cancel" and "OK" buttons.',
    },
  },
}

export const WithFooter = () => {
  const { visible, show, hide } = useVisible()
  return (
    <DraggableModalProvider>
      <MLButton type='primary' onClick={show}>
        Modal with footer
      </MLButton>
      <MLModal
        visible={visible}
        title='Modal with footer'
        footer={[
          <MLButton key='yes' onClick={hide}>Yes</MLButton>,
          <MLButton key='no' onClick={hide}>No</MLButton>,
          <MLButton key='maybe' onClick={hide}>Maybe</MLButton>,
        ]}
      />
    </DraggableModalProvider>
  )
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

export const Position = () => {
  const { visible, toggle, hide } = useVisible()
  return (
    <DraggableModalProvider>
      <MLButton onClick={toggle}>Position Demo</MLButton>
      <p>Note: modals will be constrained to this story's bounding box.</p>
      <div>
        <MLModal visible={visible} onOk={hide} onCancel={hide}>default</MLModal>
        <MLModal visible={visible} onOk={hide} onCancel={hide} centered>centered</MLModal>
        <MLModal visible={visible} onOk={hide} onCancel={hide} style={{ top: 1 }}>bottom</MLModal>
      </div>
    </DraggableModalProvider>
  )
}
