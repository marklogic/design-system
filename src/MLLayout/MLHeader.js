import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import './style'

const { Header } = Layout

const headerStyle = {
  backgroundColor: '#c4c4c4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  height: '64px',
  // fontSize: 'TODO',
  // fontFamily: 'TODO',
}

const MLHeader = (props) => {
  return (
    <Header style={headerStyle} {...props}>
      {props.children}
    </Header>
  )
}

export default MLHeader
