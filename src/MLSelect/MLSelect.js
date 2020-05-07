import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
import { includes } from 'lodash-es'
const { Option, OptGroup } = Select

const MLSelect = (props) => {
  const { mode = '' } = props
  const allowClear = includes(['tags', 'multiple'], mode)
  return (
    <Select
      allowClear={allowClear}
      {...props}
    >
      {props.children}
    </Select>
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
