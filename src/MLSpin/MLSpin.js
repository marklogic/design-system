import React from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import classNames from 'classnames'

const MLSpin = React.forwardRef((props, ref) => {
  return (
    <Spin
      ref={ref}
      {...props}
      className={classNames('ml-spin', props.className)}
    >
      {props.children}
    </Spin>
  )
})

MLSpin.displayName = 'MLSpin'

export default MLSpin
