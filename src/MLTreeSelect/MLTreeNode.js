import React from 'react'
import { TreeSelect } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { TreeNode } = TreeSelect

const MLTreeNode = TreeNode;

MLTreeNode.displayName = 'MLTreeSelect.MLTreeNode'

export default MLTreeNode
