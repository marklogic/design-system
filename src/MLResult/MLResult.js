import React from 'react'
import { Result } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CheckCircleFilled, InfoCircleFilled, ExclamationCircleFilled, CloseCircleFilled } from '@marklogic/design-system/es/MLIcon'

const MLResult = (props) => {
  let { icon } = props
  if (icon === undefined) {
    const statusIconMap = {
      success: <CheckCircleFilled />,
      info: <InfoCircleFilled />,
      warning: <ExclamationCircleFilled />,
      error: <CloseCircleFilled />,
    }
    // eslint-disable-next-line no-prototype-builtins
    if (statusIconMap.hasOwnProperty(props.status)) {
      icon = statusIconMap[props.status]
    }
  }
  return (
    <Result
      icon={icon}
      {...props}
      className={classNames('ml-result', props.className)}
    >
      {props.children}
    </Result>
  )
}

MLResult.defaultProps = {
}

MLResult.propTypes = {
  title: PropTypes.node,
  subTitle: PropTypes.node,
  status: PropTypes.oneOf(['success', 'error', 'info', 'warning', '404', '403', '500']),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  extra: PropTypes.node,
}

export default MLResult
