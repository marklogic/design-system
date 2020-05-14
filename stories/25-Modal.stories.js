import React, { useState } from 'react'
import { MLModal, MLButton } from '@marklogic/design-system'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import {
  DraggableModalProvider,
} from 'ant-design-draggable-modal'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Feedback/MLModal',
  component: MLModal,
  decorators: [withKnobs],
}

function useVisible() {
  const [visible, setVisible] = useState(false)
  const show = (e) => {
    setVisible(true)
  }
  const hide = (e) => {
    setVisible(false)
  }
  return { visible, show, hide }
}

export const Basic = () => {
  const { visible, show, hide } = useVisible()
  return (
    <DraggableModalProvider>
      <MLButton type='primary' onClick={(e) => { action('onOk')(e); return show(e) }}>
        Open Modal
      </MLButton>
      <MLModal
        title={text('title', 'Basic Modal')}
        visible={visible}
        closable={boolean('closable', true)}
        onOk={(e) => { action('onOk')(e); return hide(e) }}
        okText={text('okText', 'OK')}
        onCancel={(e) => { action('onCancel')(e); return hide(e) }}
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
