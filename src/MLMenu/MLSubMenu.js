import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import './style'
const { SubMenu } = Menu

const MLSubMenu = (props) => {
  return (
    <SubMenu {...props}>
      {props.children}
    </SubMenu>
  )
}

MLSubMenu.displayName = 'MLMenuSubMenu'

export default MLSubMenu
