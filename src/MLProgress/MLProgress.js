import React from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'antd'

const MLProgress = (props) => {
  return (
    <Progress {...props}>
      {props.children}
    </Progress>
  )
}

export const progressTypes = ['line', 'circle', 'dashboard']

MLProgress.propTypes = {
  percent: PropTypes.number,
  type: PropTypes.oneOf(progressTypes),
};

MLProgress.defaultProps = {
  percent: 0,
  type: 'line',
};

export default MLProgress
