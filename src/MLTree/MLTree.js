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
}

export default MLTree
