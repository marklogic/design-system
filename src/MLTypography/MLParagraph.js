import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { Paragraph } = Typography

const MLParagraph = (props) => (
  <Paragraph
    {...props}
    className={classNames('ml-typography-paragraph', props.className)}
  >
    {props.children}
  </Paragraph>
)

MLParagraph.propTypes = {}

MLParagraph.displayName = 'MLTypography.MLParagraph'

export default MLParagraph
