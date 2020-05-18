import React from 'react'
import { Collapse } from 'antd'
import classNames from 'classnames'

const MLCollapse = (props) => {
  return (
    <Collapse
      bordered={false}
      {...props}
      className={classNames('ml-collapse', props.className)}
    >
      {props.children}
    </Collapse>
  )
}

export default MLCollapse
