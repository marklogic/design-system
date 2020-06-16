import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLTypography = (props) => (
  <Typography
    {...props}
    className={classNames('ml-typography', props.className)}
  >
    {props.children}
  </Typography>
)

MLTypography.propTypes = {
}

export default MLTypography
