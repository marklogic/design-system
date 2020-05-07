import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
const { Item } = Breadcrumb

const MLBreadcrumb = (props) => {
  return (
    <Breadcrumb {...props}>
      {props.children}
    </Breadcrumb>
  )
}

const MLItem = (props) => {
  return (
    <Item {...props}>
      {props.children}
    </Item>
  )
}

MLBreadcrumb.MLItem = MLItem

export default MLBreadcrumb
