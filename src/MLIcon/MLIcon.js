import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLIcon = React.forwardRef((props, ref) => {
  return (
    <Icon
      ref={ref}
      {...props}
      className={classNames('ml-icon', props.className)}
    >
      {props.children}
    </Icon>
  )
})

MLIcon.defaultProps = {
}

MLIcon.propTypes = {
}

export default MLIcon
