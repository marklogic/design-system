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
}

MLItem.propTypes = {
}

MLItem.displayName = 'MLTimeline.MLItem'

export default MLItem
