import React from 'react'
import PropTypes from 'prop-types'
import { PageHeader } from 'antd'
import './style'
import classNames from 'classnames'

const MLHeader = (props) => {
  const avatarProps = { size: 48, ...props.avatar }
  return (
    <PageHeader
      backIcon={false}
      ghost={false}
      {...props}
      avatar={avatarProps}
      className={classNames('ml-header', props.className)}
    >
      {props.children}
    </PageHeader>
  )
}

MLHeader.propTypes = {
  avatar: PropTypes.object,
  extra: PropTypes.arrayOf(PropTypes.node),
  title: PropTypes.node,
}

export default MLHeader
