import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
import { includes } from 'lodash-es'
import MLSizeContext from '../MLConfigProvider/MLSizeContext'
import classNames from 'classnames'
const { Option, OptGroup } = Select

const MLSelect = (props) => {
  const { mode = '' } = props
  const allowClear = includes(['tags', 'multiple'], mode)
  return (
    <MLSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        debugger;
        return (
          <Select
            allowClear={allowClear}
            {...props}
            size={size}
            className={classNames(props.className, 'ml-select')}
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

// NOTE: The following two are extensions of their base class to work around
// Ant checking for the types of MLSelect's children to be only Option or OptGroup
class MLOption extends Option {}

MLOption.defaultProps = {}
MLOption.propTypes = {}

MLSelect.MLOption = MLOption

class MLOptGroup extends OptGroup {}

MLOptGroup.defaultProps = {}
MLOptGroup.propTypes = {}

MLSelect.MLOptGroup = MLOptGroup

export default MLSelect
