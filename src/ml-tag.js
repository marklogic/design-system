import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'
const { CheckableTag } = Tag

const MLTag = (props) => {
  return (
    <Tag {...props}>
      {props.children}
    </Tag>
  )
}

const MLCheckableTag = (props) => {
  return (
    <CheckableTag {...props}>
      {props.children}
    </CheckableTag>
  )
}

MLTag.MLCheckableTag = MLCheckableTag

export default MLTag
