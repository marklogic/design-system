import React from 'react'
import { Radio } from 'antd'
import classNames from 'classnames'
const { Group } = Radio

const MLGroup = (props) => (
  <Group
    {...props}
    className={classNames('ml-radio-group', props.className)}
  >
    {props.children}
  </Group>
)

MLGroup.defaultProps = {
  size: 'small',
}

MLGroup.displayName = 'MLRadioGroup'

MLGroup.propTypes = {}

export default MLGroup
