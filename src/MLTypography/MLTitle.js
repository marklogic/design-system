import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { Title } = Typography

const MLTitle = (props) => (
  <Title
    {...props}
    className={classNames('ml-typography', props.className)}
  >
    {props.children}
  </Title>
)

MLTitle.propTypes = {}

MLTitle.displayName = 'MLTypography.MLTitle'

export default MLTitle
