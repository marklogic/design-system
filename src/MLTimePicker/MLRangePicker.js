import React from 'react'
import { TimePicker } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { RangePicker } = TimePicker

const MLRangePicker = React.forwardRef((props, ref) => {
  return (
    <RangePicker
      ref={ref}
      {...props}
      className={classNames('ml-time-picker-range-picker', props.className)}
    >
      {props.children}
    </RangePicker>
  )
})

MLRangePicker.defaultProps = {
}

MLRangePicker.propTypes = {
}

MLRangePicker.displayName = 'MLTimePicker.MLRangePicker'

export default MLRangePicker
