import React from 'react'
import { DraggableModal } from 'ant-design-draggable-modal'
import classNames from 'classnames'

const MLModal = React.forwardRef((props, ref) => {
  return (
    <DraggableModal
      ref={ref}
      {...props}
      className={classNames('ml-modal', props.className)}
    >
      {props.children}
    </DraggableModal>
  )
})

MLModal.displayName = 'MLModal'

export default MLModal
