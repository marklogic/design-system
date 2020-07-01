import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import classNames from 'classnames'
const { Divider } = Menu

const MLDivider = React.forwardRef((props, ref) => {
  return (
    <Divider
      ref={ref}
      {...props}
      className={classNames('ml-menu-divider', props.className)}
    >
      {props.children}
    </Divider>
  )
})

MLDivider.displayName = 'MLMenu.MLDivider'

export default MLDivider
