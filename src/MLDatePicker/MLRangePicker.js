import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
import { MLConfigContext } from '../MLConfigProvider'
import MLSizeContext from '../MLConfigProvider/MLSizeContext'
import { pickerPropsFromContext } from './utils'
import classNames from 'classnames'
import uniqueId from 'lodash-es/uniqueId'
const { RangePicker } = DatePicker

const MLRangePicker = ({ hourLabel, minuteLabel, secondLabel, ...props }) => {
  // Generate an unchanging unique ID to tie this to its specific style elements
  const [componentId] = useState(uniqueId('ml-date-picker-range-picker-'))

  return (
    <MLConfigContext.Consumer>
      {(pickerContext) => (
        <MLSizeContext.Consumer>
          {(contextSize) => {
            const contextProps = pickerPropsFromContext('range', pickerContext, props)

            const unitPositions = [hourLabel, minuteLabel, secondLabel]
            // Create the style tags to show the hr/min/sec labels in the relevant columns for just this component
            const unitStyleTags = unitPositions.map((unitLabel, index) => (
              <style key={unitLabel}>
                {`.ml-date-picker-range-picker-container.${componentId} .ant-calendar-time-picker-select:nth-child(${index + 1}) ul::before {
                  content: '${unitLabel}'
                }`}
              </style>
            ))

            const size = contextSize || props.size
            return (
              <>
                <RangePicker
                  {...contextProps}
                  {...props}
                  // The following have to go after props to override it properly
                  showTime={contextProps.showTime}
                  size={size}
                  className={classNames('ml-date-picker-range-picker', componentId, props.className)}
                  dropdownClassName={classNames('ml-date-picker-range-picker-container', componentId, props.dropdownClassName)}
                >
                  {props.children}
                </RangePicker>
                {contextProps.showTime ? unitStyleTags : null}
              </>
            )
          }}
        </MLSizeContext.Consumer>
      )}
    </MLConfigContext.Consumer>
  )
}

MLRangePicker.defaultProps = {
  bordered: true,
  placeholder: ['Start', 'End'],
  separator: (
    <span className='ant-picker-separator'>–</span> // en-dash
  ),
  size: 'small',
  hourLabel: 'Hr',
  minuteLabel: 'Min',
  secondLabel: 'Sec',
}

MLRangePicker.propTypes = {
  bordered: PropTypes.bool,
  placeholder: PropTypes.array,
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.string,
}

MLRangePicker.displayName = 'MLDatePicker.MLRangePicker'

export default MLRangePicker
