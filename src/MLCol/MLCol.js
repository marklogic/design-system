import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'antd'

const MLCol = (props) => {
  return (
    <Col {...props}>
      {props.children}
    </Col>
  )
}

export default MLCol
