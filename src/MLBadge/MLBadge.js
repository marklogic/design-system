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
  /** Customize Badge dot color */
  color: PropTypes.string,
  /** Number to show in badge */
  count: PropTypes.node,
  /** Whether to display a red dot instead of count */
  dot: PropTypes.bool,
  /** set offset of the badge dot, like[x, y] */
  offset: PropTypes.array,
  /** Max count to show */
  overflowCount: PropTypes.number,
  /** Whether to show badge when count is zero */
  showZero: PropTypes.bool,
  /** Set Badge as a status dot */
  status: PropTypes.oneOf(['success', 'processing', 'default', 'error', 'warning']),
  /** If status is set, text sets the display text of the status dot */
  text: PropTypes.string,
  /** Text to show when hovering over the badge */
  title: PropTypes.string,
}

export default MLBadge
