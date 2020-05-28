import React from 'react'
import { Skeleton } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLSkeleton = (props) => {
  return (
    <Skeleton
      {...props}
      className={classNames('ml-skeleton', props.className)}
    >
      {props.children}
    </Skeleton>
  )
}

MLSkeleton.defaultProps = {
  avatar: true,
}

MLSkeleton.propTypes = {
}

export default MLSkeleton
