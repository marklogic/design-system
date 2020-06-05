import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd'
import classNames from 'classnames'
import { AbstractTooltipProps } from './index'

const MLTooltip = React.forwardRef((props, ref) => {
  return (
    <Tooltip
      ref={ref}
      {...props}
      className={classNames('ml-tooltip-container', props.className)}
      overlayClassName={classNames('ml-tooltip', props.overlayClassName)}
    >
      {props.children}
    </Tooltip>
  )
})

MLTooltip.displayName = 'MLTooltip'

MLTooltip.defaultProps = {
}

MLTooltip.propTypes = Object.assign({
  /** Title of the card */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
}, AbstractTooltipProps)

export default MLTooltip
