import React from 'react'
import { Descriptions } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { Item } = Descriptions

const MLItem = (props) => {
  return (
    <Item
      {...props}
      className={classNames('ml-descriptions-item', props.className)}
    >
      {props.children}
    </Item>
  )
}

MLItem.defaultProps = {
}

MLItem.propTypes = {
}

MLItem.displayName = 'MLDescriptions.MLItem'

export default MLItem
