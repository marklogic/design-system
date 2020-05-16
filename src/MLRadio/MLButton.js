import React from 'react'
import { Radio } from 'antd'
import classNames from 'classnames'
const { Button } = Radio

const MLButton = (props) => (
  <Button
    {...props}
    className={classNames('ml-radio-button', props.className)}
  >
    {props.children}
  </Button>
)

MLButton.propTypes = {}

MLButton.displayName = 'MLRadio.MLButton'

export default MLButton
