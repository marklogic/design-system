import React from 'react'
import { Popover } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { AbstractTooltipProps } from '../MLTooltip'

const MLPopover = (props) => {
  return (
    <Popover
      {...props}
      className={classNames('ml-popover', props.className)}
    >
      {props.children}
    </Popover>
  )
}

MLPopover.defaultProps = {
  trigger: ['hover', 'focus'],
  placement: 'top',
}

MLPopover.propTypes = Object.assign({
  /** Content of the card */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Title of the card */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}, AbstractTooltipProps)

export default MLPopover
