import MLSizeContext from '../MLConfigProvider/MLSizeContext'
import classNames from 'classnames'
import React from 'react'
import { Input } from 'antd'

const MLTextArea = (props) => {
  return (
    <MLSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <Input.TextArea
            {...props}
            size={size}
            className={classNames(props.className, 'ml-input')}
          >
            {props.children}
          </Input.TextArea>
        )
      }}
    </MLSizeContext.Consumer>
  )
}

MLTextArea.defaultProps = {
  size: 'small',
}

MLTextArea.displayName = 'MLInputTextArea'

export default MLTextArea
