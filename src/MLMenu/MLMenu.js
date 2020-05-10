import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import './style'
import classNames from 'classnames'

const MLMenu = (props) => {
  return (
    <Menu
      {...props}
      className={classNames('ml-menu', props.className)}
    >
      {props.children}
    </Menu>
  )
}

export default MLMenu
