import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'antd'
import classNames from 'classnames'

const MLCol = React.forwardRef((props, ref) => {
  return (
    <Col
      ref={ref}
      {...props}
      className={classNames('ml-col', props.className)}
    >
      {props.children}
    </Col>
  )
})

MLCol.displayName = 'MLCol'

export default MLCol
