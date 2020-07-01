import React from 'react'
import PropTypes from 'prop-types'
import { AutoComplete } from 'antd'
import classNames from 'classnames'
const { OptGroup } = AutoComplete

const MLOptGroup = React.forwardRef((props, ref) => {
  return (
    <OptGroup
      ref={ref}
      {...props}
      className={classNames('ml-auto-complete-opt-group', props.className)}
    >
      {props.children}
    </OptGroup>
  )
})

MLOptGroup.displayName = 'MLAutoComplete.MLOptGroup'

export default MLOptGroup
