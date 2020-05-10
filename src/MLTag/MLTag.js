import React from 'react'
import { Tag } from 'antd'
import './style'

const MLTag = (props) => {
  return (
    <Tag {...props}>
      {props.children}
    </Tag>
  )
}

export default MLTag
