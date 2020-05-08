import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import { MLInputSizeContext } from './MLInputSizeContext'
import './style'
import classNames from 'classnames'

const { Search, TextArea, Group, Password } = Input

const MLInput = (props) => {
  return (
    <MLInputSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <Input
            {...props}
            size={size}
            className={classNames(props.className, 'ml-input')}
          >
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
  return (
    <MLInputSizeContext.Provider value={props.size}>
      <Group
        {...props}
        className={classNames(props.className, 'ml-input')}
      >
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
  return (
    <MLInputSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <Search
            {...props}
            size={size}
            className={classNames(props.className, 'ml-input')}
          >
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
  return (
    <MLInputSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <TextArea
            {...props}
            size={size}
            className={classNames(props.className, 'ml-input')}
          >
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
  return (
    <MLInputSizeContext.Consumer>
      {(contextSize) => {
        const size = contextSize || props.size
        return (
          <Password
            {...props}
            size={size}
            className={classNames(props.className, 'ml-input')}
          >
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
