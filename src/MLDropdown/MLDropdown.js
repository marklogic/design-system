import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'antd'
import './style'

const MLDropdown = (props) => {
  return (
    <Dropdown {...props}>
      {props.children}
    </Dropdown>
  )
}

export default MLDropdown
