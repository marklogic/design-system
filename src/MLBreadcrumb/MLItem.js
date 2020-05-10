import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
const { Item } = Breadcrumb

const MLItem = (props) => {
  return (
    <Item {...props}>
      {props.children}
    </Item>
  )
}

export default MLItem
