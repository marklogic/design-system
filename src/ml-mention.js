import React from 'react'
import PropTypes from 'prop-types'
import { Mentions } from 'antd'
const { Option } = Mentions

const MLMentions = (props) => {
  return (
    <Mentions {...props}>
      {props.children}
    </Mentions>
  )
}

const MLOption = (props) => {
  return (
    <Option {...props}>
      {props.children}
    </Option>
  )
}

MLMentions.MLOption = MLOption

export default MLMentions
