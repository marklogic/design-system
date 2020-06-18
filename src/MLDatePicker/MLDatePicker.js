import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
import { MLConfigContext } from '../MLConfigProvider'
import MLSizeContext from '../MLConfigProvider/MLSizeContext'
import { pickerPropsFromContext } from './utils'
import classNames from 'classnames'

const MLDatePicker = React.forwardRef((props, ref) => {
  return (
    <MLConfigContext.Consumer>
      {(pickerContext) => (
        <MLSizeContext.Consumer>
          {(contextSize) => {
            const contextProps = pickerPropsFromContext('date', pickerContext, props)
            const size = contextSize || props.size
            return (
              <DatePicker
                {...contextProps}
                ref={ref}
                {...props}
                // The following have to go after props to override it properly
                showTime={contextProps.showTime}
                size={size}
                className={classNames('ml-date-picker', props.className)}
              >
                {props.children}
              </DatePicker>
            )
          }}
        </MLSizeContext.Consumer>
      )}
    </MLConfigContext.Consumer>
  )
})

MLDatePicker.defaultProps = {
  bordered: true,
  size: 'small',
}

MLDatePicker.propTypes = {
  bordered: PropTypes.bool,
  size: PropTypes.string,
}

MLDatePicker.displayName = 'MLDatePicker'

export default MLDatePicker
