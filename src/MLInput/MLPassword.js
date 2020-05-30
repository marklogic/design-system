import MLSizeContext from '../MLConfigProvider/MLSizeContext'
import classNames from 'classnames'
import React from 'react'
import { Input } from 'antd'

const MLPassword = (props) => {
  return (
    <MLSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <Input.Password
            {...props}
            size={size}
            className={classNames('ml-input-password', props.className)}
          >
            {props.children}
          </Input.Password>
        )
      }}
    </MLSizeContext.Consumer>
  )
}

MLPassword.defaultProps = {
  size: 'small',
}

MLPassword.displayName = 'MLInput.MLPassword'

export default MLPassword
