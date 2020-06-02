import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import classNames from 'classnames'

const { Content } = Layout

const MLContent = (props) => {
  return (
    <Content
      {...props}
      className={classNames('ml-layout-content', props.className)}
    >
      {props.children}
    </Content>
  )
}

MLContent.displayName = 'MLLayout.MLContent'

export default MLContent
