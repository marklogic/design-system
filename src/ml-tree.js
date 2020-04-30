import React from 'react'
import PropTypes from 'prop-types'
import { Tree } from 'antd'

function onSelect(selectedKeys, {selected, selectedNodes, node, event}){
  if(selected) {
    event.source.
  }
}

const MLTree = (props) => {
  return (
    <Tree onSelect={onSelect}{...props} />
  )
}

export default MLTree
