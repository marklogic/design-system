import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'antd'
import classNames from 'classnames'

const MLDropdown = React.forwardRef((props, ref) => {
  return (
    <Dropdown
      ref={ref}
      {...props}
      className={classNames('ml-dropdown', props.className)}
    >
      {props.children}
    </Dropdown>
  )
})

MLDropdown.defaultProps = {
  trigger: ['click'],
}

MLDropdown.displayName = 'MLDropdown'

export default MLDropdown
