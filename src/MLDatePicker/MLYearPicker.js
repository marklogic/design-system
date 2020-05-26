import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
import { MLConfigContext } from '../MLConfigProvider'
import { pickerPropsFromContext } from './utils'
import classNames from 'classnames'
const { YearPicker } = DatePicker

const MLYearPicker = (props) => {
  return (
    <MLConfigContext.Consumer>
      {(context) => {
        const contextProps = pickerPropsFromContext('year', context, props)
        return (
          <YearPicker
            {...contextProps}
            {...props}
            showTime={contextProps.showTime}
            className={classNames('ml-date-picker-year-picker', props.className)}
          >
            {props.children}
          </YearPicker>
        )
      }}
    </MLConfigContext.Consumer>
  )
}

MLYearPicker.defaultProps = {
  bordered: true,
  size: 'small',
}

MLYearPicker.propTypes = {
  bordered: PropTypes.bool,
  size: PropTypes.string,
}

MLYearPicker.displayName = 'MLDatePicker.MLYearPicker'

export default MLYearPicker
