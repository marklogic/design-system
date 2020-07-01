import React from 'react'
import { Timeline } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { Item } = Timeline

const MLItem = (props) => {
  return (
    <Item
      {...props}
      className={classNames('ml-timeline-item', props.className)}
    >
      {props.children}
    </Item>
  )
}

MLItem.defaultProps = {
  position: 'left',
}

MLItem.propTypes = {
  /** Set the circle's color to blue, red, green, gray or other custom colors */
  color: PropTypes.string,
  /** Customize timeline dot */
  dot: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Customize node position */
  position: PropTypes.oneOf(['left', 'right']),
}

MLItem.displayName = 'MLTimeline.MLItem'

export default MLItem
