import React from 'react'
import PropTypes from 'prop-types'
import { get, isArray } from 'lodash-es'
import { DatePicker } from 'antd'
import { MLConfigContext } from './ml-config-provider'
import './ml-date-picker.less'
const { RangePicker } = DatePicker

const pickerPropsFromContext = ({ dateFormat, dateTimeFormat, weekFormat, monthFormat }, props) => {
  const format = get({
    week: weekFormat,
    month: monthFormat,
    // Nothing special for quarter or year pickers
  }, props.picker, dateFormat)
  let showTime = props.showTime
  if (props.showTime === true) {
    // Use the first dateFormat if multiple are provided, because TimePicker chokes on arrays of formats
    showTime = {
      format: isArray(dateFormat) ? dateFormat[0] : dateFormat,
    }
  }
  return { format, showTime }
}

const MLDatePicker = (props) => {
  return (
    <MLConfigContext.Consumer>
      {(context) => {
        const contextProps = pickerPropsFromContext(context, props)
        return (
          <DatePicker format={contextProps.format} {...props} showTime={contextProps.showTime}>
            {props.children}
          </DatePicker>
        )
      }}
    </MLConfigContext.Consumer>
  )
}

MLDatePicker.propTypes = {
}

const MLRangePicker = (props) => {
  return (
    <MLConfigContext.Consumer>
      {(context) => {
        return (
          <RangePicker {...pickerPropsFromContext(context, props)} {...props}>
            {props.children}
          </RangePicker>
        )
      }}
    </MLConfigContext.Consumer>
  )
}

MLRangePicker.propTypes = {
}

MLDatePicker.MLRangePicker = MLRangePicker

export default MLDatePicker
