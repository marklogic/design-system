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
