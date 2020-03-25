import React from 'react'
import PropTypes from 'prop-types'
import { Autocomplete } from 'antd'

const MLAutocomplete = (props) => {
  return (
    <Autocomplete {...props}>
      {props.children}
    </Autocomplete>
  )
}

export default MLAutocomplete
