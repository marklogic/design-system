import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
import { MLConfigContext } from './ml-config-provider'
import './ml-date-picker.less'
const { RangePicker } = DatePicker

const MLDatePicker = (props) => {
  return (
    <MLConfigContext.Consumer>
      {({ dateFormat }) => (
        <div>
          Format: {dateFormat}
          <DatePicker {...props} format={dateFormat}>
            {props.children}
          </DatePicker>
        </div>
      )}
    </MLConfigContext.Consumer>
  )
}

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
