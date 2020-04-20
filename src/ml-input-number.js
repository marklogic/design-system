import React from 'react'
import PropTypes from 'prop-types'
import { InputNumber } from 'antd'
import './ml-input-number.less'

const MLInputNumber = (props) => {
  return (
    <InputNumber {...props}>
      {props.children}
    </InputNumber>
  )
}

export default MLInputNumber
