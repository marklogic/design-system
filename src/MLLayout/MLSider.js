import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import classNames from 'classnames'
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
    <Sider
      style={siderStyle}
      {...siderProps}
      {...props}
      className={classNames('ml-layout-sider', props.className)}
    >
      {props.children}
    </Sider>
  )
}

export default MLSider
