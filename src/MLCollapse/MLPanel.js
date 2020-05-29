import React from 'react'
import { Collapse } from 'antd'
import classNames from 'classnames'
const { Panel } = Collapse

const MLPanel = React.forwardRef((props, ref) => {
  return (
    <Panel
      ref={ref}
      {...props}
      className={classNames('ml-collapse-panel', props.className)}
    >
      {props.children}
    </Panel>
  )
})

MLPanel.displayName = 'MLCollapse.MLPanel'

export default MLPanel
