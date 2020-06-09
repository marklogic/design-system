import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
import { MLConfigContext } from '../MLConfigProvider'
import MLSizeContext from '../MLConfigProvider/MLSizeContext'
import { pickerPropsFromContext } from './utils'
import classNames from 'classnames'
import uniqueId from 'lodash-es/uniqueId'

const MLDatePicker = ({ hourLabel, minuteLabel, secondLabel, ...props }) => {
  // Generate an unchanging unique ID to tie this to its specific style elements
  const [componentId] = useState(uniqueId('ml-date-picker-'))

  return (
    <MLConfigContext.Consumer>
      {(pickerContext) => (
        <MLSizeContext.Consumer>
          {(contextSize) => {
            const contextProps = pickerPropsFromContext('date', pickerContext, props)

            const unitPositions = [hourLabel, minuteLabel, secondLabel]
            // Create the style tags to show the hr/min/sec labels in the relevant columns for just this component
            const unitStyleTags = unitPositions.map((unitLabel, index) => (
              <style key={unitLabel}>
                {`.ml-date-picker-container.${componentId} .ant-calendar-time-picker-select:nth-child(${index + 1}) ul::before {
                  content: '${unitLabel}'
                }`}
              </style>
            ))

            const size = contextSize || props.size
            return (
              <>
                <DatePicker
                  {...contextProps}
                  {...props}
                  // The following have to go after props to override it properly
                  showTime={contextProps.showTime}
                  size={size}
                  className={classNames('ml-date-picker', componentId, props.className)}
                  dropdownClassName={classNames('ml-date-picker-container', componentId, props.dropdownClassName)}
                >
                  {props.children}
                </DatePicker>
                {contextProps.showTime ? unitStyleTags : null}
              </>
            )
          }}
        </MLSizeContext.Consumer>
      )}
    </MLConfigContext.Consumer>
  )
}

MLDatePicker.defaultProps = {
  bordered: true,
  size: 'small',
  hourLabel: 'Hr',
  minuteLabel: 'Min',
  secondLabel: 'Sec',
}

MLDatePicker.propTypes = {
  hourLabel: PropTypes.string,
  minuteLabel: PropTypes.string,
  secondLabel: PropTypes.string,
  className: PropTypes.string,
  dropdownClassName: PropTypes.string,
  bordered: PropTypes.bool,
  size: PropTypes.string,
}

export default MLDatePicker
