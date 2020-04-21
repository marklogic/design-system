import React from 'react'
import PropTypes from 'prop-types'
import { AutoComplete } from 'antd'

const MLAutoComplete = (props) => {
  return (
    <AutoComplete {...props}>
      {props.children}
    </AutoComplete>
  )
}

export default MLAutoComplete
