import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
import './ml-date-picker.less'
const { RangePicker } = DatePicker

const MLDatePicker = (props) => (
  <DatePicker {...props}>
    {props.children}
  </DatePicker>
)

MLDatePicker.propTypes = {
}

const MLRangePicker = (props) => (
  <RangePicker {...props}>
    {props.children}
  </RangePicker>
)

MLRangePicker.propTypes = {
}

MLDatePicker.MLRangePicker = MLRangePicker

export default MLDatePicker
