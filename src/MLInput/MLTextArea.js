import MLSizeContext from '../MLConfigProvider/MLSizeContext'
import classNames from 'classnames'
import React from 'react'
import { Input } from 'antd'

const MLTextArea = React.forwardRef((props, ref) => {
  return (
    <MLSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <Input.TextArea
            ref={ref}
            {...props}
            size={size}
            className={classNames('ml-input-textarea', props.className)}
          >
            {props.children}
          </Input.TextArea>
        )
      }}
    </MLSizeContext.Consumer>
  )
})

MLTextArea.defaultProps = {
  size: 'small',
}

MLTextArea.displayName = 'MLInput.MLTextArea'

export default MLTextArea
