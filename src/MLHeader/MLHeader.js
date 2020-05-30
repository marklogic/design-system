import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLHeader = (props) => {
  return (
    <div
      className={classNames('ml-header', props.className)}
    >
      <div className='ml-header-avatar'>{props.avatar}</div>
      <div className='ml-header-title'>{props.title}</div>
      <div className='ml-header-spacer' />
      <div className='ml-header-extra'>{props.extra}</div>
    </div>
  )
}

MLHeader.propTypes = {
  avatar: PropTypes.object,
  extra: PropTypes.arrayOf(PropTypes.node),
  title: PropTypes.node,
}

export default MLHeader
