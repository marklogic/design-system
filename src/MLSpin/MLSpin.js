import React from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import classNames from 'classnames'

const MLSpin = (props) => {
  return (
    <Spin
      {...props}
      className={classNames('ml-spin', props.className)}
    >
      {props.children}
    </Spin>
  )
}

export default MLSpin
