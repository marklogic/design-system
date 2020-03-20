import React from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'antd'
const { Panel } = Collapse

const MLCollapse = (props) => {
  return (
    <Collapse bordered={false} {...props}>
      {props.children}
    </Collapse>
  )
}

const MLPanel = (props) => {
  return (
    <Panel {...props}>
      {props.children}
    </Panel>
  )
}

MLCollapse.MLPanel = MLPanel

export default MLCollapse
