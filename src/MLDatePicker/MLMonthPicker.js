import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
import { MLConfigContext } from '../MLConfigProvider'
import { pickerPropsFromContext } from './utils'
import classNames from 'classnames'
const { MonthPicker } = DatePicker

const MLMonthPicker = React.forwardRef((props, ref) => {
  return (
    <MLConfigContext.Consumer>
      {(context) => {
        const contextProps = pickerPropsFromContext('month', context, props)
        return (
          <MonthPicker
            {...contextProps}
            ref={ref}
            {...props}
            showTime={contextProps.showTime}
            className={classNames('ml-date-picker-month-picker', props.className)}
          >
            {props.children}
          </MonthPicker>
        )
      }}
    </MLConfigContext.Consumer>
  )
})

MLMonthPicker.defaultProps = {
  bordered: true,
  size: 'small',
}

MLMonthPicker.propTypes = {
  bordered: PropTypes.bool,
  size: PropTypes.string,
}

MLMonthPicker.displayName = 'MLDatePicker.MLMonthPicker'

export default MLMonthPicker
