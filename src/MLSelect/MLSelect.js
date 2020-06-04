import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
import { includes } from 'lodash-es'
import MLSizeContext from '../MLConfigProvider/MLSizeContext'
import classNames from 'classnames'

const MLSelect = (props) => {
  const { mode = '' } = props
  const allowClear = includes(['tags', 'multiple'], mode)
  return (
    <MLSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <Select
            allowClear={allowClear}
            {...props}
            size={size}
            className={classNames('ml-select', props.className)}
          >
            {props.children}
          </Select>
        )
      }}
    </MLSizeContext.Consumer>
  )
}

MLSelect.defaultProps = {
  showArrow: true,
  size: 'small',
}

MLSelect.propTypes = {
  mode: PropTypes.oneOf([null, 'multiple', 'tags']),
  showArrow: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'large', 'small']),
}

export default MLSelect
