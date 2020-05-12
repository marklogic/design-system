import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'antd'
import classNames from 'classnames'

const MLRow = (props) => {
  return (
    <Row
      {...props}
      className={classNames('ml-row', props.className)}
    >
      {props.children}
    </Row>
  )
}

export default MLRow
