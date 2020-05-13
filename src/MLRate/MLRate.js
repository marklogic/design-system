import React from 'react'
import PropTypes from 'prop-types'
import { Rate } from 'antd'
import classNames from 'classnames'

const MLRate = (props) => {
  return (
    <Rate
      {...props}
      className={classNames('ml-rate', props.className)}
    >
      {props.children}
    </Rate>
  )
}

export default MLRate
