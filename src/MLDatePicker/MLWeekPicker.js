import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
import { MLConfigContext } from '../MLConfigProvider'
import { pickerPropsFromContext } from './utils'
import classNames from 'classnames'
const { WeekPicker } = DatePicker

const MLWeekPicker = React.forwardRef((props, ref) => {
  return (
    <MLConfigContext.Consumer>
      {(context) => {
        const contextProps = pickerPropsFromContext('week', context, props)
        return (
          <WeekPicker
            {...contextProps}
            ref={ref}
            {...props}
            showTime={contextProps.showTime}
            className={classNames('ml-date-picker-week-picker', props.className)}
            dropdownClassName={classNames('ml-date-picker-week-picker-container', props.dropdownClassName)}
          >
            {props.children}
          </WeekPicker>
        )
      }}
    </MLConfigContext.Consumer>
  )
})

MLWeekPicker.defaultProps = {
  bordered: true,
  size: 'small',
}

MLWeekPicker.propTypes = {
  bordered: PropTypes.bool,
  size: PropTypes.string,
}

MLWeekPicker.displayName = 'MLDatePicker.MLWeekPicker'

export default MLWeekPicker
