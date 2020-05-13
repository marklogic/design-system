import React from 'react'
import { Tag } from 'antd'
import classNames from 'classnames'
const { CheckableTag } = Tag

const MLCheckableTag = (props) => {
  return (
    <CheckableTag
      {...props}
      className={classNames('ml-tag-checkable-tag', props.className)}
    >
      {props.children}
    </CheckableTag>
  )
}

export default MLCheckableTag
