import React from 'react'
import PropTypes from 'prop-types'
import { Rate } from 'antd'

const MLRate = (props) => {
  return (
    <Rate {...props}>
      {props.children}
    </Rate>
  )
}

export default MLRate
