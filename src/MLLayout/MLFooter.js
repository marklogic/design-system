import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import classNames from 'classnames'

const { Footer } = Layout

const MLFooter = React.forwardRef((props, ref) => {
  return (
    <Footer
      ref={ref}
      {...props}
      className={classNames('ml-layout-footer', props.className)}
    >
      {props.children}
    </Footer>
  )
})

MLFooter.displayName = 'MLLayout.MLFooter'

export default MLFooter
