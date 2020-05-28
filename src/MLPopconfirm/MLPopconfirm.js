import React from 'react'
import PropTypes from 'prop-types'
import { Popconfirm } from 'antd'
import classNames from 'classnames'
import { AbstractTooltipProps } from '../MLTooltip'

const MLPopconfirm = (props) => {
  return (
    <Popconfirm
      {...props}
      className={classNames('ml-popconfirm', props.className)}
    >
      {props.children}
    </Popconfirm>
  )
}

MLPopconfirm.defaultProps = {
}

MLPopconfirm.propTypes = Object.assign({
  /** text of the Cancel button */
  cancelText: PropTypes.string,
  /** text of the Confirm button */
  okText: PropTypes.string,
  /** Button type of the Confirm button */
  okType: PropTypes.string,
  /** title of the confirmation box */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** callback of cancel */
  onCancel: PropTypes.func,
  /** callback of confirmation */
  onConfirm: PropTypes.func,
  /** customize icon of confirmation */
  icon: PropTypes.node,
  /** is show popconfirm when click its childrenNode */
  disabled: PropTypes.bool,

}, AbstractTooltipProps)

export default MLPopconfirm
