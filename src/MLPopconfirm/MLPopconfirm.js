import React from 'react'
import PropTypes from 'prop-types'
import { Popconfirm } from 'antd'
import classNames from 'classnames'

const MLPopconfirm = React.forwardRef((props, ref) => {
  return (
    <Popconfirm
      ref={ref}
      {...props}
      className={classNames('ml-popconfirm', props.className)}
    >
      {props.children}
    </Popconfirm>
  )
})

MLPopconfirm.displayName = 'MLPopconfirm'

export default MLPopconfirm
