import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'antd'
import { CheckCircleFilled, InfoCircleFilled, ExclamationCircleFilled, CloseCircleFilled } from '../MLIcon'
import classNames from 'classnames'

const MLAlert = React.forwardRef((props, ref) => {
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
    <Alert
      icon={icon}
      ref={ref}
      {...props}
      className={classNames('ml-alert', props.className)}
    />
  )
})

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

MLAlert.displayName = 'MLAlert'

export default MLAlert
