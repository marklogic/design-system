import React from 'react'
import { Tree } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { TreeNode } = Tree

const MLTreeNode = (props) => (
  <TreeNode
    {...props}
    className={classNames('ml-tree-tree-node', props.className)}
  >
    {props.children}
  </TreeNode>
)

MLTreeNode.defaultProps = {
}

MLTreeNode.propTypes = {
}

MLTreeNode.displayName = 'MLTree.MLTreeNode'

export default MLTreeNode
