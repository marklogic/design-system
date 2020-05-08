import React from 'react'
import PropTypes from 'prop-types'
import { InputNumber } from 'antd'
import './style'
import MLSizeContext from '../MLConfigProvider/MLSizeContext'

const MLInputNumber = (props) => {
  return (
    <MLSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <InputNumber {...props} size={size}>
            {props.children}
          </InputNumber>
        )
      }}
    </MLSizeContext.Consumer>
  )
}

export default MLInputNumber
