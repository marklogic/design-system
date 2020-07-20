import React from 'react'
import { Radio } from 'antd'
import classNames from 'classnames'
const { Group } = Radio

const MLGroup = React.forwardRef((props, ref) => {
  return (
    <Group
      ref={ref}
      {...props}
      className={classNames('ml-radio-group', props.className)}
    >
      {props.children}
    </Group>
  )
})

MLGroup.defaultProps = {
  size: 'small',
}

MLGroup.displayName = 'MLRadio.MLGroup'

MLGroup.propTypes = {}

export default MLGroup
