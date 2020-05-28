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
}

MLTreeSelect.propTypes = {
}

export default MLTreeSelect
