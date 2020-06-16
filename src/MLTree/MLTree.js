import React from 'react'
import { Tree } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLTree = (props) => (
  <Tree
    {...props}
    className={classNames('ml-tree', props.className)}
  >
    {props.children}
  </Tree>
)

MLTree.defaultProps = {
  selectable: false,
}

MLTree.propTypes = {
  autoExpandParent: PropTypes.bool,
  blockNode: PropTypes.bool,
  checkable: PropTypes.bool,
  checkedKeys: PropTypes.array,
  checkStrictly: PropTypes.bool,
  defaultCheckedKeys: PropTypes.arrayOf(PropTypes.string),
  defaultExpandAll: PropTypes.bool,
  defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),
  defaultExpandParent: PropTypes.bool,
  defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  draggable: PropTypes.bool,
  expandedKeys: PropTypes.arrayOf(PropTypes.string),
  filterTreeNode: PropTypes.func,
  loadData: PropTypes.func,
  loadedKeys: PropTypes.arrayOf(PropTypes.string),
  multiple: PropTypes.bool,
  selectable: PropTypes.bool,
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
  showIcon: PropTypes.bool,
  switcherIcon: PropTypes.object,
  showLine: PropTypes.bool,
  onCheck: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
  onExpand: PropTypes.func,
  onLoad: PropTypes.func,
  onRightClick: PropTypes.func,
  onSelect: PropTypes.func,
}

export default MLTree
