import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'antd'
import './style'
const { Group, Button } = Radio

const MLRadio = (props) => (
  <Radio {...props}>
    {props.children}
  </Radio>
)

MLRadio.propTypes = {
}

const MLGroup = (props) => (
  <Group size='small' {...props}>
    {props.children}
  </Group>
)

MLGroup.displayName = 'MLRadioGroup'

MLGroup.propTypes = {
}

MLRadio.MLGroup = MLGroup

const MLButton = (props) => (
  <Button {...props}>
    {props.children}
  </Button>
)

MLButton.propTypes = {
}

MLRadio.MLButton = MLButton

export default MLRadio
