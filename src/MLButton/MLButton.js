import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import classNames from 'classnames'

const MLButton = React.forwardRef((props, ref) => {
  let type
  let className
  if (props.type === 'highlight') {
    type = 'primary'
    className = 'ml-btn-highlight'
  } else {
    type = props.type
    className = ''
  }
  return (
    <Button
      ref={ref}
      {...props}
      type={type}
      className={classNames('ml-btn', props.className, className)}
    >
      {props.children}
    </Button>
  )
})

// MarkLogic Defaults
MLButton.defaultProps = {
  size: 'small',
}

// Typechecking for Ant Design properties
MLButton.propTypes = {
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,
  href: PropTypes.string,
  htmlType: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({ delay: PropTypes.number }),
  ]),
  shape: PropTypes.string,
  size: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  block: PropTypes.bool,
}

MLButton.displayName = 'MLButton'

export default MLButton
