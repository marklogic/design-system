import React from 'react'
import PropTypes from 'prop-types'
import { Notification } from 'antd'

const MLNotification = (props) => {
  return (
    <Notification {...props}>
      {props.children}
    </Notification>
  )
}

export default MLNotification
