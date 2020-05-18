import React from 'react'
import PropTypes from 'prop-types'
import { Popconfirm } from 'antd'
import classNames from 'classnames'

const MLPopconfirm = (props) => {
  return (
    <Popconfirm
      {...props}
      className={classNames('ml-popconfirm', props.className)}
    >
      {props.children}
    </Popconfirm>
  )
}

export default MLPopconfirm
