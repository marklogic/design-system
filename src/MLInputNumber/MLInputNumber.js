import React from 'react'
import PropTypes from 'prop-types'
import { InputNumber } from 'antd'
import MLSizeContext from '../MLConfigProvider/MLSizeContext'
import classNames from 'classnames'

const MLInputNumber = (props) => {
  return (
    <MLSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <InputNumber
            {...props}
            size={size}
            className={classNames('ml-input-number', props.className)}
          >
            {props.children}
          </InputNumber>
        )
      }}
    </MLSizeContext.Consumer>
  )
}

export default MLInputNumber
