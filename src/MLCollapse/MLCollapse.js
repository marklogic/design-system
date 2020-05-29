import React from 'react'
import { Collapse } from 'antd'
import classNames from 'classnames'

const MLCollapse = React.forwardRef((props, ref) => {
  return (
    <Collapse
      bordered={false}
      ref={ref}
      {...props}
      className={classNames('ml-collapse', props.className)}
    >
      {props.children}
    </Collapse>
  )
})

export default MLCollapse
