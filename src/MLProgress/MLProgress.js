import React from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'antd'
import classNames from 'classnames'

const MLProgress = React.forwardRef((props, ref) => {
  return (
    <Progress
      ref={ref}
      {...props}
      className={classNames('ml-progress', props.className)}
    >
      {props.children}
    </Progress>
  )
})

export const progressTypes = ['line', 'circle', 'dashboard']

MLProgress.propTypes = {
  percent: PropTypes.number,
  type: PropTypes.oneOf(progressTypes),
}

MLProgress.defaultProps = {
  percent: 0,
  type: 'line',
}

MLProgress.displayName = 'MLProgress'

export default MLProgress
