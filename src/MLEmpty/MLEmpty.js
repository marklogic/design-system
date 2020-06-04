import React from 'react'
import { Empty } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLEmpty = (props) => (
  <Empty
    {...props}
    className={classNames('ml-empty', props.className)}
  >
    {props.children}
  </Empty>
)

MLEmpty.PRESENTED_IMAGE_SIMPLE = Empty.PRESENTED_IMAGE_SIMPLE
MLEmpty.PRESENTED_IMAGE_DEFAULT = Empty.PRESENTED_IMAGE_DEFAULT

MLEmpty.defaultProps = {
  image: MLEmpty.PRESENTED_IMAGE_SIMPLE,
}

MLEmpty.propTypes = {
  /** Customize description */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** style of image */
  imageStyle: PropTypes.object,
  /** Customize image. Will treat as image url when string provided. */
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export default MLEmpty
