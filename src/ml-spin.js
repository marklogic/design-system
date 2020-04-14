import React from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'

const MLSpin = (props) => {
  return (
    <Spin {...props}>
      {props.children}
    </Spin>
  )
}

export default MLSpin
