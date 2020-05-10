import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import './style'
import classNames from 'classnames'
const { ItemGroup } = Menu

const MLItemGroup = (props) => {
  return (
    <ItemGroup
      {...props}
      className={classNames('ml-menu-item-group', props.className)}
    >
      {props.children}
    </ItemGroup>
  )
}

MLItemGroup.displayName = 'MLMenuItemGroup'

export default MLItemGroup
