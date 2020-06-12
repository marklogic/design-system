import React from 'react'
import { Anchor } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { Link } = Anchor

const MLLink = React.forwardRef((props, ref) => {
  return (
    <Link
      ref={ref}
      {...props}
      className={classNames('ml-anchor-link', props.className)}
    >
      {props.children}
    </Link>
  )
})

MLLink.defaultProps = {
}

MLLink.propTypes = {
}

MLLink.displayName = 'MLAnchor.MLLink'

export default MLLink
