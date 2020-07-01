import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import classNames from 'classnames'
const { SubMenu } = Menu

const MLSubMenu = React.forwardRef((props, ref) => {
  return (
    <SubMenu
      ref={ref}
      {...props}
      className={classNames('ml-menu-sub-menu', props.className)}
    >
      {props.children}
    </SubMenu>
  )
})

MLSubMenu.displayName = 'MLMenu.MLSubMenu'

export default MLSubMenu
