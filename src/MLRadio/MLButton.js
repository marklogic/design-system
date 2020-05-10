import React from 'react'
import { Radio } from 'antd'
import './style'
const { Button } = Radio

const MLButton = (props) => (
  <Button {...props}>
    {props.children}
  </Button>
)

MLButton.propTypes = {}

export default MLButton
