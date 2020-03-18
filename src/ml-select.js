import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
import _ from 'lodash'
const { Option, OptGroup } = Select

const MLSelect = (props) => {
  const mode = props.mode || ''
  const allowClear = _.includes(['tags', 'multiple'], mode)
  const showArrow = true
  const size = 'small'
  return (
    <Select
      allowClear={allowClear}
      showArrow={showArrow}
      size={size}
      {...props}
    >
      {props.children}
    </Select>
  )
}

const MLOption = (props) => {
  return (
    <Option {...props} />
  )
}

MLSelect.MLOption = MLOption

const MLOptGroup = (props) => {
  return (
    <OptGroup {...props} />
  )
}

MLSelect.MLOptGroup = MLOptGroup

export default MLSelect
