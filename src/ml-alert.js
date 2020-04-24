import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'antd'
import './ml-alert.less'
import { CheckCircleFilled, InfoCircleFilled, ExclamationCircleFilled, CloseCircleFilled } from './ml-icon'

const MLAlert = (props) => {
  let icon
  if (props.type === 'success') {
    icon = <CheckCircleFilled />
  } else if (props.type === 'info') {
    icon = <InfoCircleFilled />
  } else if (props.type === 'warning') {
    icon = <ExclamationCircleFilled />
  } else if (props.type === 'error') {
    icon = <CloseCircleFilled />
  }
  return (
    <Alert icon={icon} {...props} />
  )
}

MLAlert.defaultProps = {
  closable: false,
  type: 'info',
  showIcon: true,
}

MLAlert.propTypes = {
  closable: PropTypes.bool,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  showIcon: PropTypes.bool,
}

export default MLAlert
