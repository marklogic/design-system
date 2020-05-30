import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from 'antd'
import classNames from 'classnames'

const MLDivider = React.forwardRef((props, ref) => {
  return (
    <Divider
      ref={ref}
      {...props}
      className={classNames('ml-divider', props.className)}
    >
      {props.children}
    </Divider>
  )
})

MLDivider.displayName = 'MLDivider'

export default MLDivider
