import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import MLFooter from './ml-footer'

const { Header, Content, Sider } = Layout

const layoutStyle = {}

const headerStyle = {
  backgroundColor: '#c4c4c4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  height: '64px'
  // fontSize: 'TODO',
  // fontFamily: 'TODO',
}

const siderStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#dddddd'
}

const contentStyle = {}

export const MLLayout = (props) => {
  return (
    <Layout style={layoutStyle} {...props}>
      {props.children}
    </Layout>
  )
}

const MLHeader = (props) => {
  return (
    <Header style={headerStyle} {...props}>
      {props.children}
    </Header>
  )
}

const siderProps = {
  width: 70
}

const MLSider = (props) => {
  return (
    <Sider style={siderStyle} {...siderProps} {...props}>
      {props.children}
    </Sider>
  )
}

const MLContent = (props) => {
  return (
    <Content style={contentStyle} {...props}>
      {props.children}
    </Content>
  )
}

MLLayout.MLHeader = MLHeader
MLLayout.MLFooter = MLFooter
MLLayout.MLSider = MLSider
MLLayout.MLContent = MLContent

export default MLLayout
