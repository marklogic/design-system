import React from 'react'
import { Badge } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLBadge = (props) => {
  return (
    <Badge
      {...props}
      className={classNames('ml-badge', props.className)}
    >
      {props.children}
    </Badge>
  )
}

MLBadge.defaultProps = {
}

MLBadge.propTypes = {
}

export default MLBadge
