import React from 'react'
import { Tag } from 'antd'
import classNames from 'classnames'

const MLTag = (props) => {
  return (
    <Tag
      {...props}
      className={classNames('ml-tag', props.className)}
    >
      {props.children}
    </Tag>
  )
}

export default MLTag
