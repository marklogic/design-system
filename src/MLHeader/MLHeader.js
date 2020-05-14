import React from 'react'
import PropTypes from 'prop-types'
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

MLHeader.propTypes = {
  avatar: PropTypes.object,
  extra: PropTypes.arrayOf(PropTypes.node),
  title: PropTypes.node,
  subtitle: PropTypes.node,
};

export default MLHeader
