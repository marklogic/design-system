import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
const { Header, Content, Sider, Footer } = Layout

const layoutStyle = {}

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

const siderStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#dddddd',
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
  width: 70,
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

const footerStyleBase = {
  padding: '12px 50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  textAlign: 'center',
  margin: '0',
  fontSize: '14px',
  fontFamily: 'Helvetica Neue',
}

const footerStyleWhiteBg = Object.assign({}, footerStyleBase, {
  color: '#999',
  backgroundColor: '#fff',
})

const footerStyleGraphicBg = Object.assign({}, footerStyleBase, {
  color: '#fff',
  background: 'unset',
})

const footerSpanStyle = {
  padding: '0 5px',
}

const MLFooter = (props) => {
  const footerStyle = props.graphicBackground ? footerStyleGraphicBg : footerStyleWhiteBg
  return (
    <Footer style={footerStyle} {...props}>
      <div>
        <span style={footerSpanStyle}>Copyright @ {props.year} MarkLogic Corporation. All Rights Reserved.</span>
        |
        <span style={footerSpanStyle}>
          <a href='#TODO'>Terms and Conditions</a>
        </span>
        |
        <span style={footerSpanStyle}>
          <a href='#TODO'>Policies</a>
        </span>
      </div>
    </Footer>
  )
}

// Typechecking for Ant Design properties
MLFooter.propTypes = {
  year: PropTypes.number,
  graphicBackground: PropTypes.bool,
}

MLLayout.MLHeader = MLHeader
MLLayout.MLFooter = MLFooter
MLLayout.MLSider = MLSider
MLLayout.MLContent = MLContent

export default MLLayout
