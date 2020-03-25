import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd'

const MLTooltip = (props) => {
  return (
    <Tooltip {...props}>
      {props.children}
    </Tooltip>
  )
}

export default MLTooltip
