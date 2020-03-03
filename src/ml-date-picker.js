import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
const { RangePicker } = DatePicker

const MLDatePicker = (props) => {
  return (
    <DatePicker {...props}>
      {props.children}
    </DatePicker>
  )
}

// Typechecking for Ant Design properties
MLDatePicker.propTypes = {
}

const MLRangePicker = (props) => {
  return (
    <RangePicker {...props}>
      {props.children}
    </RangePicker>
  )
}

MLRangePicker.propTypes = {
}

MLDatePicker.MLRangePicker = MLRangePicker

export default MLDatePicker
