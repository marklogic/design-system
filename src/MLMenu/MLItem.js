import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import './style'
import classNames from 'classnames'
const { Item } = Menu

const MLItem = (props) => {
  return (
    <Item
      {...props}
      className={classNames('ml-menu-item', props.className)}
    >
      {props.children}
    </Item>
  )
}

MLItem.displayName = 'MLMenuItem'

export default MLItem
