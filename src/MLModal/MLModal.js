import React from 'react'
import { DraggableModal } from 'ant-design-draggable-modal'
import classNames from 'classnames'

const MLModal = (props) => {
  return (
    <DraggableModal
      {...props}
      className={classNames('ml-modal', props.className)}
    >
      {props.children}
    </DraggableModal>
  )
}

export default MLModal
