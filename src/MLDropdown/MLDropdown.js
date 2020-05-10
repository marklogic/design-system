import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'antd'
import './style'
import classNames from 'classnames'

const MLDropdown = (props) => {
  return (
    <Dropdown
      {...props}
      className={classNames('ml-dropdown', props.className)}
    >
      {props.children}
    </Dropdown>
  )
}

MLDropdown.defaultProps = {
  trigger: 'click',
}

export default MLDropdown
