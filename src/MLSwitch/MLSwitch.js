import { Switch } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLSwitch = (props) => {
  return (
    <Switch
      {...props}
      className={classNames('ml-switch', props.className)}
    />
  )
}

export const sizes = ['small', 'default']

MLSwitch.propTypes = {
  checked: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
}

MLSwitch.defaultProps = {
  size: 'small',
}

export default MLSwitch
