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
  avatar: {
    size: 'small',
    circle: 'true',
  },
}

MLSkeleton.propTypes = {
  /** Show animation effect */
  active: PropTypes.bool,
  /** Show avatar placeholder */
  avatar: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /** Display the skeleton when true */
  loading: PropTypes.bool,
  /** Show paragraph placeholder */
  paragraph: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /** Show title placeholder */
  title: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

}

export default MLSkeleton
