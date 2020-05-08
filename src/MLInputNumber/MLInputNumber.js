import React from 'react'
import PropTypes from 'prop-types'
import { InputNumber } from 'antd'
import './style'
import { MLConfigContext } from '../MLConfigProvider'

const MLInputNumber = (props) => {
  return (
    <MLConfigContext.Consumer>
      {(context) => (
        <InputNumber size={context.size} {...props}>
          {props.children}
        </InputNumber>
      )}
    </MLConfigContext.Consumer>
  )
}

export default MLInputNumber
