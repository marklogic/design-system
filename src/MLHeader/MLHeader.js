import React from 'react'
import PropTypes from 'prop-types'
import { MLPageHeader } from '@marklogic/design-system'
import './style'
import classNames from 'classnames'

/**
 * Note that changes to `MLPageHeader` will affect this component.
 */
const MLHeader = (props) => {
  return (
    <div
      className={classNames('ml-header', props.className)}
    >
      <div className='ml-header-avatar'>{props.avatar}</div>
      <div className='ml-header-title'>{props.title}</div>
      <div className='ml-header-spacer' />
      <div className='ml-header-heading-extra'>{props.extra}</div>
    </div>
  )
}

MLHeader.propTypes = {
  avatar: PropTypes.object,
  extra: PropTypes.arrayOf(PropTypes.node),
  title: PropTypes.node,
}

export default MLHeader
