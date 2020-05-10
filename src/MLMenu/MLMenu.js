import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import './style'

const MLMenu = (props) => {
  return (
    <Menu {...props}>
      {props.children}
    </Menu>
  )
}

export default MLMenu
