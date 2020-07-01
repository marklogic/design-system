import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLHeader = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={classNames('ml-header', props.className)}
    >
      <div className='ml-header-avatar'>{props.avatar}</div>
      <div className='ml-header-title'>{props.title}</div>
      <div className='ml-header-spacer' />
      <div className='ml-header-extra'>{props.extra}</div>
    </div>
  )
})

MLHeader.defaultProps = {
  avatar: null,
  extra: [],
  title: null,
}

MLHeader.propTypes = {
  avatar: PropTypes.object,
  extra: PropTypes.arrayOf(PropTypes.node),
  title: PropTypes.node,
}

MLHeader.displayName = 'MLHeader'

export default MLHeader
