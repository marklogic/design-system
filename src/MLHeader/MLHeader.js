import React from 'react'
import PropTypes from 'prop-types'
import { MLPageHeader } from '@marklogic/design-system'
import './style'
import classNames from 'classnames'

/**
 * Note that changes to `MLPageHeader` will affect this component.
 */
const MLHeader = (props) => {
  const avatarProps = { size: 48, ...props.avatar }
  return (
    <MLPageHeader
      backIcon={false}
      ghost={false}
      {...props}
      avatar={avatarProps}
      className={classNames('ml-header', props.className)}
    >
      {props.children}
    </MLPageHeader>
  )
}

MLHeader.propTypes = {
  avatar: PropTypes.object,
  extra: PropTypes.arrayOf(PropTypes.node),
  title: PropTypes.node,
}

export default MLHeader
