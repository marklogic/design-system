import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'antd'

const MLRow = (props) => {
  return (
    <Row {...props}>
      {props.children}
    </Row>
  )
}

export default MLRow
