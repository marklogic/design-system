import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import classNames from 'classnames'
const { Item } = Breadcrumb

const MLItem = React.forwardRef((props, ref) => {
  return (
    <Item
      ref={ref}
      {...props}
      className={classNames('ml-breadcrumb-item', props.className)}
    >
      {props.children}
    </Item>
  )
})

MLItem.displayName = 'MLBreadcrumb.MLItem'

MLItem.__ANT_BREADCRUMB_ITEM = true

export default MLItem
