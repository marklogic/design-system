import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import './style'

const layoutStyle = {}

export const MLLayout = (props) => {
  return (
    <Layout style={layoutStyle} {...props}>
      {props.children}
    </Layout>
  )
}

export default MLLayout
