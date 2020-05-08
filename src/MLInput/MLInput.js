import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import { MLInputSizeContext } from './MLInputSizeContext'
import './style'

const { Search, TextArea, Group, Password } = Input

const MLInput = (props) => {
  let { className = '' } = props
  className = [className, 'ml-input'].join(' ')
  return (
    <MLInputSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <Input {...props} className={className} size={size}>
            {props.children}
          </Input>
        )
      }}
    </MLInputSizeContext.Consumer>
  )
}

MLInput.defaultProps = {
  size: 'small',
  allowClear: true,
}

// TODO: Fix sizing not being taken up by all child inputs
// TODO: When implementing MLSelect, use MLConfigProvider size, same as MLInputNumber
const MLGroup = (props) => {
  let { className = '' } = props
  className = [className, 'ml-input-group'].join(' ')
  return (
    <MLInputSizeContext.Provider value={props.size}>
      <Group {...props} className={className}>
        {props.children}
      </Group>
    </MLInputSizeContext.Provider>
  )
}

MLGroup.defaultProps = {
  size: 'small',
}

MLGroup.displayName = 'MLInputGroup'
MLInput.MLGroup = MLGroup

const MLSearch = (props) => {
  let { className = '' } = props
  className = [className, 'ml-input-search'].join(' ')
  return (
    <MLInputSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <Search {...props} className={className} size={size}>
            {props.children}
          </Search>
        )
      }}
    </MLInputSizeContext.Consumer>
  )
}

MLSearch.defaultProps = {
  size: 'small',
}

MLSearch.displayName = 'MLInputSearch'
MLInput.MLSearch = MLSearch

const MLTextArea = (props) => {
  let { className = '' } = props
  className = [className, 'ml-input-textarea'].join(' ')
  return (
    <MLInputSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <TextArea {...props} className={className} size={size}>
            {props.children}
          </TextArea>
        )
      }}
    </MLInputSizeContext.Consumer>
  )
}

MLTextArea.defaultProps = {
  size: 'small',
}

MLTextArea.displayName = 'MLInputTextArea'
MLInput.MLTextArea = MLTextArea

const MLPassword = (props) => {
  let { className = '' } = props
  className = [className, 'ml-input-password'].join(' ')
  return (
    <MLInputSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <Password {...props} className={className} size={size}>
            {props.children}
          </Password>
        )
      }}
    </MLInputSizeContext.Consumer>
  )
}

MLPassword.defaultProps = {
  size: 'small',
}

MLPassword.displayName = 'MLInputPassword'
MLInput.MLPassword = MLPassword

export default MLInput
