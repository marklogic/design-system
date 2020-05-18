import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import classNames from 'classnames'
const { Item } = Breadcrumb

const MLItem = (props) => {
  return (
    <Item
      {...props}
      className={classNames('ml-breadcrumb-item', props.className)}
    >
      {props.children}
    </Item>
  )
}

MLItem.displayName = 'MLBreadcrumb.MLItem'

export default MLItem
