import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

const { Footer } = Layout

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

export default MLFooter
