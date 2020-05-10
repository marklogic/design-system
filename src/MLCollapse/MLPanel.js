import React from 'react'
import { Collapse } from 'antd'
const { Panel } = Collapse

const MLPanel = (props) => {
  return (
    <Panel {...props}>
      {props.children}
    </Panel>
  )
}

export default MLPanel
