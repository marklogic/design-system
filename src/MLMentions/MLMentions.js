import React from 'react'
import { Mentions } from 'antd'

const MLMentions = (props) => {
  return (
    <Mentions {...props}>
      {props.children}
    </Mentions>
  )
}


export default MLMentions
