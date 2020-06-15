import React from 'react'
import { List } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLList = (props) => (
  <List
    {...props}
    className={classNames('ml-list', props.className)}
  >
    {props.children}
  </List>
)

MLList.defaultProps = {
  itemLayout: 'horizontal',
}

MLList.propTypes = {
}

MLList.displayName = 'MLList'

export default MLList
