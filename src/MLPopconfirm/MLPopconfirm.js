import React from 'react'
import PropTypes from 'prop-types'
import { Popconfirm } from 'antd'

const MLPopconfirm = (props) => {
  return (
    <Popconfirm {...props}>
      {props.children}
    </Popconfirm>
  )
}

export default MLPopconfirm
