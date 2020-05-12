import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import classNames from 'classnames'

const MLCard = (props) => {
  return (
    <Card
      {...props}
      className={classNames('ml-card', props.className)}
    >
      {props.children}
    </Card>
  )
}

export default MLCard
