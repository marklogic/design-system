import React from 'react'
import { Mentions } from 'antd'
import classNames from 'classnames'

const MLMentions = (props) => {
  return (
    <Mentions
      {...props}
      className={classNames('ml-mentions', props.className)}
    >
      {props.children}
    </Mentions>
  )
}

export default MLMentions
