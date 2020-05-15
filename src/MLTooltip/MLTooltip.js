import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd'
import classNames from 'classnames'

const MLTooltip = (props) => {
  return (
    <Tooltip
      {...props}
      className={classNames('ml-tooltip-container', props.className)}
      overlayClassName={classNames('ml-tooltip', props.overlayClassName)}
    >
      {props.children}
    </Tooltip>
  )
}

export default MLTooltip
