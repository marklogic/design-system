import React from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'antd'
import './style'
const { Panel } = Collapse

const MLCollapse = (props) => {
  let { className = '' } = props
  className = [className, 'ml-collapse'].join(' ')
  return (
    <Collapse bordered={false} {...props} className={className}>
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
