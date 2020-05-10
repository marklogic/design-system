import React from 'react'
import { Mentions } from 'antd'
const { Option } = Mentions

const MLOption = (props) => {
  return (
    <Option {...props}>
      {props.children}
    </Option>
  )
}

export default MLOption
