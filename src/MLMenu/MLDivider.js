import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import './style'
const { Divider } = Menu

const MLDivider = (props) => {
  return (
    <Divider {...props}>
      {props.children}
    </Divider>
  )
}

MLDivider.displayName = 'MLMenuDivider'

export default MLDivider
