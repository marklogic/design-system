import React from 'react'
import { TimePicker } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLTimePicker = React.forwardRef((props, ref) => {
  return (
    <TimePicker
      ref={ref}
      {...props}
      className={classNames('ml-time-picker', props.className)}
    >
      {props.children}
    </TimePicker>
  )
})

MLTimePicker.defaultProps = {
}

MLTimePicker.propTypes = {
}

export default MLTimePicker
