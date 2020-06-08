import React, { useRef, useState } from 'react'
import { TimePicker } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ClockCircleOutlined } from '../MLIcon' // TODO: Fix icon import style when icon branch is merged
import uniqueId from 'lodash-es/uniqueId'

const MLTimePicker = React.forwardRef(({ hourLabel, minuteLabel, secondLabel, ...props }, ref) => {
  // Generate an unchanging unique ID to tie this to its specific style elements
  const [componentId] = useState(uniqueId('ml-time-picker-'))

  // Determine the order, and which are included, of hr/min/sec
  const unitMatchers = [
    // Test for the various ways Moment supports hr/min/sec in the format
    [hourLabel, /HH?|hh?|kk?/],
    [minuteLabel, /mm?/],
    [secondLabel, /ss?|S+/],
  ]
  const unitPositions = unitMatchers
    .filter((pair) => (
      props.format.match(pair[1]) !== null
    ))
    .map((pair) => {
      return [pair[0], props.format.match(pair[1]).index]
    })
    .sort((a, b) => a[1] - b[1])
    .map((pair) => pair[0])

  // Create the style tags to show the hr/min/sec labels in the relevant columns for just this component
  const unitStyleTags = unitPositions.map((unitLabel, index) => (
    <style key={unitLabel}>
      {`.ml-time-picker-panel.${componentId} .ant-time-picker-panel-select:nth-child(${index + 1}) ul::before {
        content: '${unitLabel}'
      }`}
    </style>
  ))
  return (
    // TODO: Use MLContextProvider for format
    <>
      <TimePicker
        id={componentId}
        ref={ref}
        {...props}
        className={classNames('ml-time-picker', componentId, props.className)}
        popupClassName={classNames('ml-time-picker-panel', componentId, props.popupClassName)}
      >
        {props.children}
      </TimePicker>
      {unitStyleTags}
    </>
  )
})

MLTimePicker.defaultProps = {
  format: 'HH:mm:ss',
  hourLabel: 'Hr',
  minuteLabel: 'Min',
  secondLabel: 'Sec',
}

MLTimePicker.propTypes = {
  hourLabel: PropTypes.string,
  minuteLabel: PropTypes.string,
  secondLabel: PropTypes.string,
  format: PropTypes.string,
  className: PropTypes.string,
  popupClassName: PropTypes.string,
  suffixIcon: <ClockCircleOutlined />,
}

MLTimePicker.displayName = 'MLTimePicker'

export default MLTimePicker
