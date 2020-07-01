import { Avatar } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
import UserOutlined from '@ant-design/icons/UserOutlined'
import classNames from 'classnames'

/**
 * A default icon is shown unless children or `src` are present.
 */
const MLAvatar = React.forwardRef((props, ref) => {
  return (
    <Avatar
      icon={(props.children || props.src) ? null : <UserOutlined />}
      ref={ref}
      {...props}
      className={classNames('ml-avatar', props.className)}
    >
      {props.children}
    </Avatar>
  )
})

MLAvatar.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['default', 'large', 'small']),
  ]),
  shape: PropTypes.oneOf(['circle', 'square']),
  src: PropTypes.string,
}

MLAvatar.defaultProps = {
  size: 'small',
  shape: 'circle',
}

MLAvatar.displayName = 'MLAvatar'

export default MLAvatar
