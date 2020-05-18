import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
import { MLConfigContext } from '../MLConfigProvider'
import { pickerPropsFromContext } from './utils'
import classNames from 'classnames'

const MLDatePicker = (props) => {
  return (
    <MLConfigContext.Consumer>
      {(context) => {
        const contextProps = pickerPropsFromContext('date', context, props)
        return (
          <DatePicker
            {...contextProps}
            {...props}
            showTime={contextProps.showTime}
            className={classNames('ml-date-picker', props.className)}
          >
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
