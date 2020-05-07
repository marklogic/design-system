import React, { useState } from 'react'
import { MLModal, MLButton } from '@marklogic/design-system'
import { withKnobs, text } from '@storybook/addon-knobs'

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
        title='Basic Modal'
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
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
