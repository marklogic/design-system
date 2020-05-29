import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import classNames from 'classnames'

const { Footer } = Layout

const MLFooter = (props) => {
  return (
    <Footer
      {...props}
      className={classNames('ml-layout-footer', props.className)}
    >
      {props.children}
    </Footer>
  )
}

MLFooter.displayName = 'MLLayout.MLFooter'

export default MLFooter
