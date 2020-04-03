import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'

const MLTag = (props) => {
  return (
    <Tag {...props}>
      {props.children}
    </Tag>
  )
}

export default MLTag
