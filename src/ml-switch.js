import { Switch } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'

const MLSwitch = (params) => {
  return <Switch {...params} />
}

export const sizes = ['small', 'default']

MLSwitch.propTypes = {
  checked: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
}

MLSwitch.defaultProps = {
  checked: false,
  size: 'small',
}

export default MLSwitch
