import React from 'react'
import { Descriptions } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLDescriptions = (props) => {
  return (
    <Descriptions
      {...props}
      className={classNames('ml-descriptions', props.className)}
    >
      {props.children}
    </Descriptions>
  )
}

MLDescriptions.defaultProps = {
  size: 'small',
  colon: false,
}

MLDescriptions.propTypes = {
}

export default MLDescriptions
