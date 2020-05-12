import React from 'react'
import PropTypes from 'prop-types'
import { AutoComplete } from 'antd'
import classNames from 'classnames'

const MLAutoComplete = (props) => {
  return (
    <AutoComplete
      {...props}
      className={classNames('ml-auto-complete', props.className)}
    >
      {props.children}
    </AutoComplete>
  )
}

export default MLAutoComplete
