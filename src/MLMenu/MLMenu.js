import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import classNames from 'classnames'

const MLMenu = React.forwardRef((props, ref) => {
  return (
    <Menu
      ref={ref}
      {...props}
      className={classNames('ml-menu', props.className)}
    >
      {props.children}
    </Menu>
  )
})

MLMenu.defaultProps = {
  theme: 'light',
  mode: 'vertical',
}

MLMenu.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
  mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),
}

MLMenu.displayName = 'MLMenu'

export default MLMenu
