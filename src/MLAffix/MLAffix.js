import React from 'react'
import { Affix } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLAffix = (props) => {
  return (
    <Affix
      {...props}
      className={classNames('ml-affix', props.className)}
    >
      {props.children}
    </Affix>
  )
}

MLAffix.defaultProps = {
}

MLAffix.propTypes = {
  /** Offset from the bottom of the viewport (in pixels) */
  offsetBottom: PropTypes.number,
  /** Offset from the top of the viewport (in pixels) */
  offsetTop: PropTypes.number,
  /** Specifies the scrollable area DOM node */
  target: PropTypes.func,
}

MLAffix.displayName = 'MLAffix'

export default MLAffix
