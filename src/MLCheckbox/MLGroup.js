import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import classNames from 'classnames'
const { Group } = Checkbox

const MLGroup = React.forwardRef((props, ref) => {
  return (
    <Group
      ref={ref}
      {...props}
      className={classNames('ml-checkbox-group', props.className)}
    >
      {props.children}
    </Group>
  )
})

MLGroup.propTypes = {
}

MLGroup.defaultProps = {
}

MLGroup.displayName = 'MLCheckbox.MLGroup'

export default MLGroup
