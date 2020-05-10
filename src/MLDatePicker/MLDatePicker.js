import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
import { MLConfigContext } from '../MLConfigProvider'
import './style'
import { pickerPropsFromContext } from './utils'

const { RangePicker } = DatePicker

const MLDatePicker = (props) => {
  return (
    <MLConfigContext.Consumer>
      {(context) => {
        const contextProps = pickerPropsFromContext(context, props)
        return (
          <DatePicker {...contextProps} {...props} showTime={contextProps.showTime}>
            {props.children}
          </DatePicker>
        )
      }}
    </MLConfigContext.Consumer>
  )
}

MLDatePicker.defaultProps = {
  bordered: true,
  size: 'small',
}

MLDatePicker.propTypes = {
  bordered: PropTypes.bool,
  size: PropTypes.string,
}


export default MLDatePicker
