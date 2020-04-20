import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'antd'
import './ml-alert.less'

const MLAlert = (props) => {
  return (
    <Alert {...props}>
      {props.children}
    </Alert>
  )
}

export default MLAlert
