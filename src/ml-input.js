import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
const { Search, TextArea, Group, Password } = Input

const MLInput = (props) => {
  return (
    <Input {...props}>
      {props.children}
    </Input>
  )
}

const MLGroup = (props) => {
  return (
    <Group size='small' {...props}>
      {props.children}
    </Group>
  )
}

MLInput.MLGroup = MLGroup

const MLSearch = (props) => {
  return (
    <Search {...props}>
      {props.children}
    </Search>
  )
}

MLInput.MLSearch = MLSearch

const MLTextArea = (props) => {
  return (
    <TextArea {...props}>
      {props.children}
    </TextArea>
  )
}

MLInput.MLTextArea = MLTextArea

const MLPassword = (props) => {
  return (
    <Password {...props}>
      {props.children}
    </Password>
  )
}

MLInput.MLPassword = MLPassword

export default MLInput
