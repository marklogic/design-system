import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd'
import classNames from 'classnames'

const MLTooltip = (props) => {
  return (
    <Tooltip
      {...props}
      className={classNames('ml-tooltip', props.className)}
    >
      {props.children}
    </Tooltip>
  )
}

export default MLTooltip
