import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import MLSizeContext from '../MLConfigProvider/MLSizeContext'
import classNames from 'classnames'

const MLInput = (props) => {
  return (
    <MLSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <Input
            {...props}
            size={size}
            className={classNames('ml-input', props.className)}
          >
            {props.children}
          </Input>
        )
      }}
    </MLSizeContext.Consumer>
  )
}

MLInput.defaultProps = {
  size: 'small',
  allowClear: true,
}

export default MLInput
