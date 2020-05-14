import React from 'react'
import PropTypes from 'prop-types'
import { PageHeader } from 'antd'
import classNames from 'classnames'

const MLPageHeader = (props) => {
  return (
    <PageHeader
      {...props}
      className={classNames('ml-page-header', props.className)}
    >
      {props.children}
    </PageHeader>
  )
}

export default MLPageHeader
