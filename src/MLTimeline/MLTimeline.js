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
}

export default MLTimeline
