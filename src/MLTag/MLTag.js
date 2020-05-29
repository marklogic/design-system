import React from 'react'
import { Tag } from 'antd'
import classNames from 'classnames'

const MLTag = React.forwardRef((props, ref) => {
  return (
    <Tag
      ref={ref}
      {...props}
      className={classNames('ml-tag', props.className)}
    >
      {props.children}
    </Tag>
  )
})

export default MLTag
