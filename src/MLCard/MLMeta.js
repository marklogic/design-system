import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import classNames from 'classnames'
const { Meta } = Card

const MLMeta = React.forwardRef((props, ref) => {
  return (
    <Meta
      ref={ref}
      {...props}
      className={classNames('ml-card-meta', props.className)}
    >
      {props.children}
    </Meta>
  )
})

MLMeta.displayName = 'MLCard.MLMeta'

export default MLMeta
