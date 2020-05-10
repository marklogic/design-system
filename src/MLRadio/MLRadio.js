import React from 'react'
import { Radio } from 'antd'
import './style'

const MLRadio = (props) => (
  <Radio {...props}>
    {props.children}
  </Radio>
)

MLRadio.propTypes = {
}

export default MLRadio
