import React from 'react'
import { TreeSelect } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLTreeSelect = (props) => {
  return (
    <TreeSelect
      {...props}
      className={classNames('ml-tree-select', props.className)}
    >
      {props.children}
    </TreeSelect>
  )
}

MLTreeSelect.defaultProps = {
  allowClear: true,
  size: 'small',
}

MLTreeSelect.propTypes = {
}

MLTreeSelect.SHOW_ALL = TreeSelect.SHOW_ALL
MLTreeSelect.SHOW_PARENT = TreeSelect.SHOW_PARENT
MLTreeSelect.SHOW_CHILD = TreeSelect.SHOW_CHILD

export default MLTreeSelect
