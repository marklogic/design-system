import React, { Component, useState } from 'react'

import {
  MLButton,
  MLModal,
  MLDatePicker,
  MLLayout,
  MLSlider,
  MLConfigProvider,
} from '@marklogic/design-system'

import {
  Route,
  CheckCircleFilled,
} from '@marklogic/design-system/MLIcon'

import {
  DraggableModalProvider,
} from 'ant-design-draggable-modal'

const configValues = {
  dateFormat: 'YYYY-MMM-DD', // Default for all dates, and DatePicker
  dateTimeFormat: 'YYYY-MMM-DD, HH:mm:ss', // default for all dates with times, and DatePicker with times
  monthFormat: 'YYYY-MM', // default for Month picker
  weekFormat: 'YYYY-wo', // default for Week picker
  yearFormat: 'YYYY', // default for Year picker
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

const App = () => {
  const { visible, show, hide } = useVisible()
  return (
    <div>
      <MLButton
        onClick={show}
        size='small'
        type='primary'
      >
        Open Modal
      </MLButton>
      <DraggableModalProvider>
        <MLModal
          visible={visible}
          cancelText='Cancel'
          closable
          okText='OK'
          okType='primary'
          onCancel={hide}
          onOk={hide}
          title='Basic Modal'
        >
          <h3>
            Contents
          </h3>
          <div>
            Your text here.
          </div>
        </MLModal>
      </DraggableModalProvider>
    </div>
  )
}

export default App
