import React from 'react'
import { Timeline } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLTimeline = (props) => {
  return (
    <Timeline
      {...props}
      className={classNames('ml-timeline', props.className)}
    >
      {props.children}
    </Timeline>
  )
}

MLTimeline.defaultProps = {
}

MLTimeline.propTypes = {
  /** Set the last ghost node's existence or its content */
  pending: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.node]),
  /** Set the dot of the last ghost node when pending is true */
  pendingDot: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** reverse nodes or not */
  reverse: PropTypes.bool,
  /** By sending alternate the timeline will distribute the nodes to the left and right. */
  mode: PropTypes.oneOf(['left', 'alternate', 'right']),
}

MLTimeline.displayName = 'MLTimeline'

export default MLTimeline
