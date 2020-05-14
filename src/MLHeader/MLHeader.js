import React from 'react'
import { PageHeader } from 'antd'
import './style'

const MLHeader = (props) => {
  const avatarProps = {size: 48, ...props.avatar}
  return (
    <PageHeader
      className='ml-header'
      avatar={avatarProps}
      ghost={false}
      {...props}
    >
      {props.children}
    </PageHeader>
  )
}

export default MLHeader
