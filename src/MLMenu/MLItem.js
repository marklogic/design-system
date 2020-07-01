import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import classNames from 'classnames'
const { Item } = Menu

const MLItem = React.forwardRef((props, ref) => {
  return (
    <Item
      ref={ref}
      {...props}
      className={classNames('ml-menu-item', props.className)}
    >
      {props.children}
    </Item>
  )
})

MLItem.displayName = 'MLMenu.MLItem'

export default MLItem
