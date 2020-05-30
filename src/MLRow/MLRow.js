import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'antd'
import classNames from 'classnames'

const MLRow = React.forwardRef((props, ref) => {
  return (
    <Row
      ref={ref}
      {...props}
      className={classNames('ml-row', props.className)}
    >
      {props.children}
    </Row>
  )
})

MLRow.displayName = 'MLRow'

export default MLRow
