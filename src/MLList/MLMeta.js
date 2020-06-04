import React from 'react'
import { List } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { Item } = List

const MLMeta = (props) => (
  <Item.Meta
    {...props}
    className={classNames('ml-list-item-meta', props.className)}
  >
    {props.children}
  </Item.Meta>
)

MLMeta.defaultProps = {
}

MLMeta.propTypes = {
}

MLMeta.displayName = 'MLList.MLItem.MLMeta'

export default MLMeta
