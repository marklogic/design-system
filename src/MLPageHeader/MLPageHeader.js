import React from 'react'
import PropTypes from 'prop-types'
import { PageHeader } from 'antd'
import classNames from 'classnames'

const MLPageHeader = React.forwardRef((props, ref) => {
  return (
    <PageHeader
      ref={ref}
      {...props}
      className={classNames('ml-page-header', props.className)}
    >
      {props.children}
    </PageHeader>
  )
})

MLPageHeader.displayName = 'MLPageHeader'

export default MLPageHeader
