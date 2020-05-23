import React from 'react'
import { Tree } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { DirectoryTree } = Tree

const MLDirectoryTree = (props) => (
  <DirectoryTree
    {...props}
    className={classNames('ml-tree-directory-tree', props.className)}
  >
    {props.children}
  </DirectoryTree>
)

MLDirectoryTree.defaultProps = {
}

MLDirectoryTree.propTypes = {
}

MLDirectoryTree.displayName = 'MLTree.MLDirectoryTree'

export default MLDirectoryTree
