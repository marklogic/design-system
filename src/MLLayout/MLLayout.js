import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import classNames from 'classnames'

const layoutStyle = {}

export const MLLayout = (props) => {
  return (
    <Layout
      style={layoutStyle}
      {...props}
      className={classNames('ml-layout', props.className)}
    >
      {props.children}
    </Layout>
  )
}

export default MLLayout
