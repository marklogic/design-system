import React from 'react'
import PropTypes from 'prop-types'
import { AutoComplete } from 'antd'
import classNames from 'classnames'
const { Option } = AutoComplete

const MLOption = React.forwardRef((props, ref) => {
  return (
    <Option
      ref={ref}
      {...props}
      className={classNames('ml-auto-complete-option', props.className)}
    >
      {props.children}
    </Option>
  )
})

MLOption.displayName = 'MLAutoComplete.MLOption'

export default MLOption
