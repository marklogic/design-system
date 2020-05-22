import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { Text } = Typography

const MLText = (props) => (
  <Text
    {...props}
    className={classNames('ml-typography-text', props.className)}
  >
    {props.children}
  </Text>
)

MLText.propTypes = {}

MLText.displayName = 'MLTypography.MLText'

export default MLText
