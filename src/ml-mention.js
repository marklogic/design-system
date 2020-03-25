import React from 'react'
import PropTypes from 'prop-types'
import { Mention } from 'antd'

const MLMention = (props) => {
  return (
    <Mention {...props}>
      {props.children}
    </Mention>
  )
}

export default MLMention
