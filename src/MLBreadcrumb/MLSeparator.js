import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import classNames from 'classnames'
const { Separator } = Breadcrumb

const MLSeparator = (props) => {
  return (
    <Separator
      {...props}
      className={classNames('ml-breadcrumb-item', props.className)}
    >
      {props.children}
    </Separator>
  )
}

MLSeparator.displayName = 'MLBreadcrumb.MLSeparator'

MLSeparator.__ANT_BREADCRUMB_SEPARATOR = true

export default MLSeparator
