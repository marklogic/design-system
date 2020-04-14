import React from 'react'
import PropTypes from 'prop-types'
import { PageHeader } from 'antd'

const MLPageHeader = (props) => {
  return (
    <PageHeader {...props}>
      {props.children}
    </PageHeader>
  )
}

export default MLPageHeader
