import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from 'antd'
import './style'
import classNames from 'classnames'

const MLDivider = (props) => {
  return (
    <Divider
      {...props}
      className={classNames('ml-divider', props.className)}
    >
      {props.children}
    </Divider>
  )
}

export default MLDivider
