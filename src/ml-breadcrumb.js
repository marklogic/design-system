import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'

const MLBreadcrumb = (props) => {
  return (
    <Breadcrumb {...props}>
      {props.children}
    </Breadcrumb>
  )
}

export default MLBreadcrumb
