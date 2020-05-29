import React from 'react'
import PropTypes from 'prop-types'
import { Rate } from 'antd'
import classNames from 'classnames'

const MLRate = React.forwardRef((props, ref) => {
  return (
    <Rate
      ref={ref}
      {...props}
      className={classNames('ml-rate', props.className)}
    >
      {props.children}
    </Rate>
  )
})

export default MLRate
