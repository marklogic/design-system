import React from 'react'
import PropTypes from 'prop-types'
import { ConfigProvider } from 'antd'

const MLConfigProvider = (props) => {
  return (
    <ConfigProvider {...props}>
      {props.children}
    </ConfigProvider>
  )
}

export default MLConfigProvider
