import React from 'react'
import PropTypes from 'prop-types'
import { InputNumber } from 'antd'
import classNames from 'classnames'

const MLInputNumber = (props) => {
  return (
    <InputNumber
      {...props}
      className={classNames('ml-input-number', props.className)}
    >
      {props.children}
    </InputNumber>
  )
}

export default MLInputNumber
