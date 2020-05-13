import React from 'react'
import { PageHeader } from 'antd'

const MLHeader = (props) => {
  return (
    <PageHeader {...props}>
      {props.children}
    </PageHeader>
  )
}

export default MLHeader
