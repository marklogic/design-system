import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'antd'
import './style'
const { Button } = Dropdown

const MLButton = (props) => {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  )
}

MLButton.defaultProps = {
  size: 'small',
}

MLButton.displayName = 'MLDropdownButton'

export default MLButton
