import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import MLSizeContext, { MLSizeContextProvider } from '../MLConfigProvider/MLSizeContext'
import './style'
import classNames from 'classnames'

const { Search, TextArea, Group, Password } = Input

const MLInput = (props) => {
  return (
    <MLSizeContext.Consumer>
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
    </MLSizeContext.Consumer>
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
    <MLSizeContextProvider size={props.size}>
      <Group
        {...props}
        className={classNames(props.className, 'ml-input')}
      >
        {props.children}
      </Group>
    </MLSizeContextProvider>
  )
}

MLGroup.defaultProps = {
  size: 'small',
}

MLGroup.displayName = 'MLInputGroup'
MLInput.MLGroup = MLGroup

const MLSearch = (props) => {
  return (
    <MLSizeContext.Consumer>
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
    </MLSizeContext.Consumer>
  )
}

MLSearch.defaultProps = {
  size: 'small',
}

MLSearch.displayName = 'MLInputSearch'
MLInput.MLSearch = MLSearch

const MLTextArea = (props) => {
  return (
    <MLSizeContext.Consumer>
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
    </MLSizeContext.Consumer>
  )
}

MLTextArea.defaultProps = {
  size: 'small',
}

MLTextArea.displayName = 'MLInputTextArea'
MLInput.MLTextArea = MLTextArea

const MLPassword = (props) => {
  return (
    <MLSizeContext.Consumer>
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
    </MLSizeContext.Consumer>
  )
}

MLPassword.defaultProps = {
  size: 'small',
}

MLPassword.displayName = 'MLInputPassword'
MLInput.MLPassword = MLPassword

export default MLInput
