import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'antd'
import classNames from 'classnames'

const MLCol = (props) => {
  return (
    <Col
      {...props}
      className={classNames('ml-col', props.className)}
    >
      {props.children}
    </Col>
  )
}

export default MLCol
