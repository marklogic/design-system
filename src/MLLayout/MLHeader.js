import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import classNames from 'classnames'

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
    <Header
      style={headerStyle}
      {...props}
      className={classNames('ml-layout-header', props.className)}
    >
      {props.children}
    </Header>
  )
}

MLHeader.displayName = 'MLLayout.MLHeader'

export default MLHeader
