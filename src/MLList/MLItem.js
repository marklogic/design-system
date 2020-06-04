import React from 'react'
import { List } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { Item } = List

const MLItem = (props) => (
  <Item
    {...props}
    className={classNames('ml-list-item', props.className)}
  >
    {props.children}
  </Item>
)

MLItem.defaultProps = {
}

MLItem.propTypes = {
}

MLItem.displayName = 'MLList.MLItem'

export default MLItem
