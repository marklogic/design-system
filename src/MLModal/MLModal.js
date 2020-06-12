import React from 'react'
import { DraggableModal } from 'ant-design-draggable-modal'
import classNames from 'classnames'

const MLModal = (props) => {
  return (
    <DraggableModal
      initialHeight={0}
      {...props}
      className={classNames('ml-modal', props.className)}
    >
      {props.children}
    </DraggableModal>
  )
}

export default MLModal
