import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import classNames from 'classnames'

export const MLLayout = React.forwardRef((props, ref) => {
  return (
    <Layout
      ref={ref}
      {...props}
      className={classNames('ml-layout', props.className)}
    >
      {props.children}
    </Layout>
  )
})

export default MLLayout
