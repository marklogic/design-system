import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import classNames from 'classnames'

const { Content } = Layout

const contentStyle = {}

const MLContent = (props) => {
  return (
    <Content
      style={contentStyle}
      {...props}
      className={classNames('ml-layout-content', props.className)}
    >
      {props.children}
    </Content>
  )
}

MLContent.displayName = 'MLLayout.MLContent'

export default MLContent
