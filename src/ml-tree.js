import React from 'react'
import PropTypes from 'prop-types'
import { Tree } from 'antd'

function onSelect(){
  if(selected) {
    //...
  }
}

const MLTree = (props) => {
  return (
    <Tree onSelect={onSelect} {...props} />
  )
}

export default MLTree
