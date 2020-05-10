import React from 'react'
import { Collapse } from 'antd'
import './style'

const MLCollapse = (props) => {
  return (
    <Collapse bordered={false} {...props}>
      {props.children}
    </Collapse>
  )
}

export default MLCollapse
