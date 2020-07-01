import React from 'react'
import { Mentions } from 'antd'
import classNames from 'classnames'
const { Option } = Mentions

const MLOption = React.forwardRef((props, ref) => {
  return (
    <Option
      ref={ref}
      {...props}
      className={classNames('ml-mentions-option', props.className)}
    >
      {props.children}
    </Option>
  )
})

MLOption.displayName = 'MLMentions.MLOption'

export default MLOption
