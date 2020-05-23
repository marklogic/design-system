import React from 'react'
import PropTypes from 'prop-types'
import { InputNumber } from 'antd'
import classNames from 'classnames'
import MLSlider from "../MLSlider";

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

MLInputNumber.propTypes = {
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  formatter: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  parser: PropTypes.func,
  precision: PropTypes.number,
  decimalSeparator: PropTypes.string,
  size: PropTypes.string,
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.number,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
}

export default MLInputNumber
