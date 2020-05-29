import React from 'react'
import { Form } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { Item } = Form

const MLItem = React.forwardRef((props, ref) => {
  return (
    <Item
      ref={ref}
      {...props}
      className={classNames('ml-form-item', props.className)}
    >
      {props.children}
    </Item>
  )
})

MLItem.defaultProps = {
  colon: true,
}

MLItem.propTypes = {
}

MLItem.displayName = 'MLForm.MLItem'

export default MLItem
