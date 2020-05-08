import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'

const MLCheckbox = (props) => {
  return (
    <Checkbox {...props}>
      {props.children}
    </Checkbox>
  )
}

export default MLCheckbox
