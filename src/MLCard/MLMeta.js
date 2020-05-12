import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import classNames from 'classnames'
const { Meta } = Card

const MLMeta = (props) => {
  return (
    <Meta
      {...props}
      className={classNames('ml-card-meta', props.className)}
    >
      {props.children}
    </Meta>
  )
}

export default MLMeta
