import React from 'react'
import { Mentions } from 'antd'
import classNames from 'classnames'
const { Option } = Mentions

const MLOption = (props) => {
  return (
    <Option
      {...props}
      className={classNames('ml-mentions-option', props.className)}
    >
      {props.children}
    </Option>
  )
}

export default MLOption
