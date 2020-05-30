import React from 'react'
import { Mentions } from 'antd'
import classNames from 'classnames'

const MLMentions = React.forwardRef((props, ref) => {
  return (
    <Mentions
      ref={ref}
      {...props}
      className={classNames('ml-mentions', props.className)}
    >
      {props.children}
    </Mentions>
  )
})

MLMentions.displayName = 'MLMentions'

export default MLMentions
