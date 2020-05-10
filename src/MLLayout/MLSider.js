import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import './style'
const { Sider } = Layout

const siderStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#dddddd',
}

const siderProps = {
  width: 70,
}

const MLSider = (props) => {
  return (
    <Sider style={siderStyle} {...siderProps} {...props}>
      {props.children}
    </Sider>
  )
}

export default MLSider
