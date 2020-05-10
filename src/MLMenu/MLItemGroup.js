import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import './style'
const { ItemGroup } = Menu

const MLItemGroup = (props) => {
  return (
    <ItemGroup {...props}>
      {props.children}
    </ItemGroup>
  )
}

MLItemGroup.displayName = 'MLMenuItemGroup'

export default MLItemGroup
