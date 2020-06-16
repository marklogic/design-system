import React from 'react'
import { Tree } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { TreeNode } = Tree

// This must be a direct alias, or it doesn't render inside Tree
const MLTreeNode = TreeNode

MLTreeNode.displayName = 'MLTree.MLTreeNode'

export default MLTreeNode
