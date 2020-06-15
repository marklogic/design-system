import React from 'react'
import { message } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import isObject from 'lodash-es/isObject'
import CheckCircleFilled from '@ant-design/icons/lib/icons/CheckCircleFilled'
import CloseCircleFilled from '@ant-design/icons/lib/icons/CloseCircleFilled'
import InfoCircleFilled from '@ant-design/icons/lib/icons/InfoCircleFilled'
import ExclamationCircleFilled from '@ant-design/icons/lib/icons/ExclamationCircleFilled'

const mlmessage = {}

const supplyDefaultIcon = (defaultIcon, fn) => (config, duration, onClose) => {
  let icon = defaultIcon
  if (isObject(config) && config.icon !== undefined) {
    icon = config.icon
  }
  return fn({
    ...config,
    icon,
  }, duration, onClose)
}

mlmessage.config = (args) => message.config(args)
mlmessage.destroy = () => message.destroy()

mlmessage.open = (args) => message.open(args)
mlmessage.success = (args) => supplyDefaultIcon(CheckCircleFilled, message.success(args))
mlmessage.error = (args) => supplyDefaultIcon(CloseCircleFilled, message.error(args))
mlmessage.info = (args) => supplyDefaultIcon(InfoCircleFilled, message.info(args))
mlmessage.warning = (args) => supplyDefaultIcon(ExclamationCircleFilled, message.warning(args))
mlmessage.warn = (args) => supplyDefaultIcon(ExclamationCircleFilled, message.warn(args))
mlmessage.loading = (args) => message.loading(args)

mlmessage.config({
  maxCount: 3,
})

export default mlmessage
