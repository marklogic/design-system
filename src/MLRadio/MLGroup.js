import React from 'react'
import { Radio } from 'antd'
import './style'
const { Group } = Radio

const MLGroup = (props) => (
  <Group {...props}>
    {props.children}
  </Group>
)

MLGroup.defaultProps = {
  size: 'small',
}

MLGroup.displayName = 'MLRadioGroup'

MLGroup.propTypes = {}

export default MLGroup
