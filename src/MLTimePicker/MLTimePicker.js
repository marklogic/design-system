import React, { useRef, useState } from 'react'
import { TimePicker } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ClockCircleOutlined } from '../MLIcon' // TODO: Fix icon import style when icon branch is merged
import uniqueId from 'lodash-es/uniqueId'
import getOrderedTimeUnits from '../_util/getOrderedTimeUnits'

const MLTimePicker = React.forwardRef(({ hourLabel, minuteLabel, secondLabel, ...props }, ref) => {
  // Generate an unchanging unique ID to tie this to its specific style elements
  const [componentId] = useState(uniqueId('ml-time-picker-'))

  const unitPositions = getOrderedTimeUnits({ hourLabel, minuteLabel, secondLabel, format: props.format })

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
  suffixIcon: <ClockCircleOutlined />,
  placeholder: 'Select time',
}

MLTimePicker.propTypes = {
  /** The label to put in the hours columns */
  hourLabel: PropTypes.string,
  /** The label to put in the minutes columns */
  minuteLabel: PropTypes.string,
  /** The label to put in the seconds columns */
  secondLabel: PropTypes.string,
  /** called from timepicker panel to render some addon to its bottom */
  addon: PropTypes.func,
  /** allow clearing text */
  allowClear: PropTypes.bool,
  /** get focus when component mounted */
  autoFocus: PropTypes.bool,
  /** className of picker */
  className: PropTypes.string,
  /** clear tooltip of icon */
  clearText: PropTypes.string,
  /** default open panel value, used to set utcOffset,locale if value/defaultValue absent */
  defaultOpenValue: PropTypes.object,
  /** to set default time */
  defaultValue: PropTypes.object,
  /** determine whether the TimePicker is disabled */
  disabled: PropTypes.bool,
  /** to specify the hours that cannot be selected */
  disabledHours: PropTypes.func,
  /** to specify the minutes that cannot be selected */
  disabledMinutes: PropTypes.func,
  /** to specify the seconds that cannot be selected */
  disabledSeconds: PropTypes.func,
  /** to set the time format */
  format: PropTypes.string,
  /** to set the container of the floating layer, while the default is to create a div element in body */
  getPopupContainer: PropTypes.func,
  /** hide the options that can not be selected */
  hideDisabledOptions: PropTypes.bool,
  /** interval between hours in picker */
  hourStep: PropTypes.number,
  /** Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices) */
  inputReadOnly: PropTypes.bool,
  /** interval between minutes in picker */
  minuteStep: PropTypes.number,
  /** whether to popup panel */
  open: PropTypes.bool,
  /** display when there's no value */
  placeholder: PropTypes.string,
  /** className of panel */
  popupClassName: PropTypes.string,
  /** style of panel */
  popupStyle: PropTypes.object,
  /** interval between seconds in picker */
  secondStep: PropTypes.number,
  /** The custom suffix icon */
  suffixIcon: PropTypes.node,
  /** The custom clear icon */
  clearIcon: PropTypes.node,
  /** display as 12 hours format, with default format h:mm:ss a */
  use12Hours: PropTypes.bool,
  /** to set time */
  value: PropTypes.object,
  /** a callback function, can be executed when the selected time is changing */
  onChange: PropTypes.func,
  /** a callback function which will be called while panel opening/closing */
  onOpenChange: PropTypes.func,
}

MLTimePicker.blur = TimePicker.blur
MLTimePicker.focus = TimePicker.focus

MLTimePicker.displayName = 'MLTimePicker'

export default MLTimePicker
