import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import classNames from 'classnames'

const { Content } = Layout

const MLContent = React.forwardRef((props, ref) => {
  return (
    <Content
      ref={ref}
      {...props}
      className={classNames('ml-layout-content', props.className)}
    >
      {props.children}
    </Content>
  )
})

MLContent.displayName = 'MLLayout.MLContent'

export default MLContent
