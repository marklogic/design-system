import React from 'react'
import PropTypes from 'prop-types'
import { InputNumber } from 'antd'
import './style'
import { MLInputSizeContext } from '../MLInput'

const MLInputNumber = (props) => {
  return (
    <MLInputSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <InputNumber {...props} size={size}>
            {props.children}
          </InputNumber>
        )
      }}
    </MLInputSizeContext.Consumer>
  )
}

export default MLInputNumber
