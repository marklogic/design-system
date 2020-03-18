import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLInput, MLButton } from '../src'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'
import { Select } from 'antd'
import './8-Input.css' // TODO: Consider including this in component, not just story
const { MLSearch } = MLInput
const { Option } = Select

export default {
  title: 'Data Entry/MLInput',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
  }
  return (<MLInput {...props} />)
}

// TODO: Did we want a SearchBar component, or just a story for it?
// TODO: Switch to MLSelect/MLOption
export const searchBar = () => {
  const selectBefore = (
    <Select defaultValue='all'>
      <Option value='all'>All Entities</Option>
    </Select>
  )
  return (
    <MLSearch
      className='ml-search-bar'
      addonBefore={selectBefore}
      enterButton='Search'
      placeholder='Type search text'
      allowClear={true}
      size='default'
    />
  )
}
