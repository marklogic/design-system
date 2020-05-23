import React from 'react'
import { Result } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLResult = (props) => (
  <Result
    {...props}
    className={classNames('ml-result', props.className)}
  >
    {props.children}
  </Result>
)

MLResult.defaultProps = {
}

MLResult.propTypes = {
}

export default MLResult
