import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import classNames from 'classnames'

const MLBreadcrumb = React.forwardRef((props, ref) => {
  return (
    <Breadcrumb
      ref={ref}
      {...props}
      className={classNames('ml-breadcrumb', props.className)}
    >
      {props.children}
    </Breadcrumb>
  )
})

export default MLBreadcrumb
