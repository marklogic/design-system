import React from 'react'
import { DraggableModal } from 'ant-design-draggable-modal'
import classNames from 'classnames'

const MLModal = (props) => {
  let className = ''
  if (!props.title) {
    className = 'ml-modal_no-title'
  }
  return (
    <DraggableModal
      initialHeight={0}
      {...props}
      className={classNames('ml-modal', className, props.className)}
      wrapClassName={classNames('ml-modal-wrap', props.wrapClassName)}
    >
      {props.children}
    </DraggableModal>
  )
}

MLModal.defaultProps = {
  mask: true,
}

MLModal.displayName = 'MLModal'

export default MLModal
