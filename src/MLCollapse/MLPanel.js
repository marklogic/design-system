import React from 'react'
import { Collapse } from 'antd'
import classNames from 'classnames'
const { Panel } = Collapse

const MLPanel = (props) => {
  return (
    <Panel
      {...props}
      className={classNames('ml-collapse-panel', props.className)}
    >
      {props.children}
    </Panel>
  )
}

export default MLPanel
