import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from 'antd'

const MLDivider = (props) => {
  return (
    <Divider {...props}>
      {props.children}
    </Divider>
  )
}

export default MLDivider
