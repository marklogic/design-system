import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { MLAutoComplete } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Data Entry/MLAutoComplete',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
    info: {
        text: 'Component description goes here',
    },
  },
}

const mockVal = (str, repeat = 1) => {
  return {
    value: str.repeat(repeat),
  }
}

export const basic = () => {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState([])
  const onSearch = (searchText) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    )
  }
  const onSelect = (data) => {
    console.log('onSelect', data)
  }
  const onChange = (data) => {
    setValue(data)
  }
  return (
    <div>
      <div>(note: we can't implement the full example because it needs state management to demonstrate and Storybook doesn't support that)</div>
      <MLAutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder='input here'
      />
      <br />
      <br />
      <MLAutoComplete
        value={value}
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder='control mode'
      />
    </div>
  )
}
