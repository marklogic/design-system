import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
import PanelContext from 'rc-picker/es/PanelContext'
import './ml-date-picker.less'
const { RangePicker } = DatePicker

const MLDatePicker = (props) => (
  <DatePicker {...props}>
    {props.children}
  </DatePicker>
)

MLDatePicker.defaultProps = {
  bordered: true,
  size: 'small',
}

MLDatePicker.propTypes = {
  bordered: PropTypes.bool,
  size: PropTypes.string,
}

const MLRangePicker = (props) => (
  <RangePicker {...props}>
    {props.children}
  </RangePicker>
)

MLRangePicker.defaultProps = {
  bordered: true,
  placeholder: ['Start', 'End'],
  separator: (
    <span className='ant-picker-separator'>–</span> // en-dash
  ),
  size: 'small',
}

MLRangePicker.propTypes = {
  bordered: PropTypes.bool,
  placeholder: PropTypes.array,
  separator: PropTypes.string,
  size: PropTypes.string,
}

MLDatePicker.MLRangePicker = MLRangePicker

export default MLDatePicker
