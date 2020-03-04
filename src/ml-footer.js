import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import _ from 'lodash'

const footerStyle = {
  padding: '12px 50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  textAlign: 'center',
  margin: '0',
  color: '#999',
  backgroundColor: '#fff'
}

const contentStyle = {
  color: '#999',
  fontSize: '14px',
  fontFamily: 'Helvetica Neue'
}

const spanStyle = {
  padding: '0 5px'
}

const linkStyle = {
  color: 'rgb(88, 106, 214)',
  cursor: 'pointer'
}

const MLFooter = (props) => {
  return (
    <Layout.Footer style={footerStyle} {...props}>
      <div style={contentStyle}>
        <span style={spanStyle}>Copyright @ {props.year} MarkLogic Corporation. All Rights Reserved.</span>
        |
        <span style={spanStyle}>
          <span style={linkStyle}>Terms and Conditions</span>
        </span>
        |
        <span style={spanStyle}>
          <span style={linkStyle}>Policies</span>
        </span>
      </div>
    </Layout.Footer>
  )
}

// Typechecking for Ant Design properties
MLFooter.propTypes = {
  year: PropTypes.number
}

export default MLFooter
