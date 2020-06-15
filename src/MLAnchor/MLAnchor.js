import React from 'react'
import { Anchor } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLAnchor = React.forwardRef((props, ref) => {
  return (
    <Anchor
      ref={ref}
      {...props}
      className={classNames('ml-anchor', props.className)}
    >
      {props.children}
    </Anchor>
  )
})

MLAnchor.defaultProps = {
  offsetTop: 24,
}

MLAnchor.propTypes = {
}

MLAnchor.displayName = 'MLAnchor'

export default MLAnchor
