import React from 'react'
import { Tag } from 'antd'
const { CheckableTag } = Tag

const MLCheckableTag = (props) => {
  return (
    <CheckableTag {...props}>
      {props.children}
    </CheckableTag>
  )
}

export default MLCheckableTag
