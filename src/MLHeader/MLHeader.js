import React from 'react'
import { PageHeader } from 'antd'
import './style'

const MLHeader = (props) => {
  return (
    <PageHeader {...props}>
      {props.children}
    </PageHeader>
  )
}

export default MLHeader
