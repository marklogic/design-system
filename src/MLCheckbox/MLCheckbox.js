import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import classNames from 'classnames'

const MLCheckbox = React.forwardRef((props, ref) => {
  return (
    <Checkbox
      ref={ref}
      {...props}
      className={classNames('ml-checkbox', props.className)}
    >
      {props.children}
    </Checkbox>
  )
})

export default MLCheckbox
