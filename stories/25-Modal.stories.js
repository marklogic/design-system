import React, { useState } from 'react'
import { MLModal, MLButton } from '@marklogic/design-system'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

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
        title={text('title','Basic Modal')}
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
