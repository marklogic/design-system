import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import classNames from 'classnames'

const { Header } = Layout

const MLHeader = (props) => {
  return (
    <Header
      {...props}
      className={classNames('ml-layout-header', props.className)}
    >
      {props.children}
    </Header>
  )
}

MLHeader.displayName = 'MLLayout.MLHeader'

export default MLHeader
