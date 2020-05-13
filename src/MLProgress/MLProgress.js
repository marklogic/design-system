import React from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'antd'
import classNames from 'classnames'

const MLProgress = (props) => {
  return (
    <Progress
      {...props}
      className={classNames('ml-progress', props.className)}
    >
      {props.children}
    </Progress>
  )
}

export const progressTypes = ['line', 'circle', 'dashboard']

MLProgress.propTypes = {
  percent: PropTypes.number,
  type: PropTypes.oneOf(progressTypes),
}

MLProgress.defaultProps = {
  percent: 0,
  type: 'line',
}

export default MLProgress
