import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import './style'
import classNames from 'classnames'
const { SubMenu } = Menu

const MLSubMenu = (props) => {
  return (
    <SubMenu
      {...props}
      className={classNames('ml-menu-sub-menu', props.className)}
    >
      {props.children}
    </SubMenu>
  )
}

MLSubMenu.displayName = 'MLMenuSubMenu'

export default MLSubMenu
