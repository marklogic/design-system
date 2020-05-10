import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import './style'
const { Item } = Menu

const MLItem = (props) => {
  return (
    <Item {...props}>
      {props.children}
    </Item>
  )
}

MLItem.displayName = 'MLMenuItem'

export default MLItem
