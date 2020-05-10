import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

const { Content } = Layout

const contentStyle = {}

const MLContent = (props) => {
  return (
    <Content style={contentStyle} {...props}>
      {props.children}
    </Content>
  )
}

export default MLContent
