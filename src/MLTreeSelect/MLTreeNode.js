import React from 'react'
import { TreeSelect } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { TreeNode } = TreeSelect

const MLTreeNode = (props) => {
  return (
    <TreeNode
      {...props}
      className={classNames('ml-tree-select-tree-node', props.className)}
    >
      {props.children}
    </TreeNode>
  )
}

MLTreeNode.defaultProps = {
}

MLTreeNode.propTypes = {
}

MLTreeNode.displayName = 'MLTreeSelect.MLTreeNode'

export default MLTreeNode
