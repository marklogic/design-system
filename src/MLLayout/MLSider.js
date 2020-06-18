import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import classNames from 'classnames'
const { Sider } = Layout

const MLSider = React.forwardRef((props, ref) => {
  return (
    <Sider
      ref={ref}
      {...props}
      className={classNames('ml-layout-sider', props.className)}
    >
      {props.children}
    </Sider>
  )
})

MLSider.displayName = 'MLLayout.MLSider'

export default MLSider
