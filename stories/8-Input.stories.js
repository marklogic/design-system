import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLInput, MLRow, MLCol, MLInputNumber, MLDatePicker, MLAutoComplete } from '@marklogic/design-system'
import { withKnobs, radios } from '@storybook/addon-knobs'
import { Select, Input } from 'antd'

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
    size: radios('size', ['large', 'default', 'small'], 'small'),
  }
  return (
    <div>
      MLInput: <MLInput {...props} />
      MLInput.MLSearch: <MLInput.MLSearch {...props} />
      MLInput.MLTextArea: <MLInput.MLTextArea {...props} />
      MLInput.MLPassword: <MLInput.MLPassword {...props} />
    </div>
  )
}

export const inputGroup = () => {
  const size = radios('size', {
    large: 'large',
    default: 'default',
    small: 'small',
  }, 'small')
  return (
    <div>
      <MLInput.MLGroup size={size} compact>
        <MLInput placeholder={'MLInput'} style={{ width: '25%' }}/>
        <MLInput.MLSearch placeholder={'MLInput.MLSearch'} style={{ width: '25%' }}/>
        <MLInput.MLPassword placeholder={'MLInput.MLPassword'} style={{ width: '25%' }}/>
        <MLInput.MLTextArea placeholder={'MLInput.MLTextArea'}/>
      </MLInput.MLGroup>
      <br />
      <MLInput.MLGroup size={size}>
        <MLRow gutter={8}>
          <MLCol span={5}>
            <MLInput defaultValue='0571' />
          </MLCol>
          <MLCol span={8}>
            <MLInput defaultValue='26888888' />
          </MLCol>
        </MLRow>
      </MLInput.MLGroup>
      <br />
      <MLInput.MLGroup size={size} compact>
        <MLInput style={{ width: '20%' }} defaultValue='0571' />
        <MLInput style={{ width: '30%' }} defaultValue='26888888' />
      </MLInput.MLGroup>
      <br />
      <MLInput.MLGroup size={size} compact>
        <Select defaultValue='Zhejiang'>
          <Select.Option value='Zhejiang'>Zhejiang</Select.Option>
          <Select.Option value='Jiangsu'>Jiangsu</Select.Option>
        </Select>
        <MLInput style={{ width: '50%' }} defaultValue='Xihu District, Hangzhou' />
      </MLInput.MLGroup>
      <br />
      <MLInput.MLGroup size={size} compact>
        <Select defaultValue='Option1'>
          <Select.Option value='Option1'>Option1</Select.Option>
          <Select.Option value='Option2'>Option2</Select.Option>
        </Select>
        <MLInput style={{ width: '50%' }} defaultValue='input content' />
        <MLInputNumber />
      </MLInput.MLGroup>
      <br />
      <MLInput.MLGroup size={size} compact>
        <MLInput style={{ width: '50%' }} defaultValue='input content' />
        <MLDatePicker style={{ width: '50%' }} />
      </MLInput.MLGroup>
      <br />
      <MLInput.MLGroup size={size} compact>
        <Select defaultValue='Option1-1'>
          <Select.Option value='Option1-1'>Option1-1</Select.Option>
          <Select.Option value='Option1-2'>Option1-2</Select.Option>
        </Select>
        <Select defaultValue='Option2-2'>
          <Select.Option value='Option2-1'>Option2-1</Select.Option>
          <Select.Option value='Option2-2'>Option2-2</Select.Option>
        </Select>
      </MLInput.MLGroup>
      <br />
      <MLInput.MLGroup size={size} compact>
        <Select defaultValue='1'>
          <Select.Option value='1'>Between</Select.Option>
          <Select.Option value='2'>Except</Select.Option>
        </Select>
        <MLInput style={{ width: 100, textAlign: 'center' }} placeholder='Minimum' />
        <MLInput
          style={{
            width: 30,
            borderLeft: 0,
            pointerEvents: 'none',
            backgroundColor: '#fff',
          }}
          placeholder='~'
          disabled
        />
        <MLInput style={{ width: 100, textAlign: 'center', borderLeft: 0 }} placeholder='Maximum' />
      </MLInput.MLGroup>
    </div>
  )
}

// TODO: Did we want a SearchBar component, or just a story for it?
// TODO: Switch to MLSelect/MLOption
export const searchBar = () => {
  const selectBefore = (
    <Select defaultValue='all'>
      <Select.Option value='all'>All Entities</Select.Option>
    </Select>
  )
  return (
    <MLInput.MLSearch
      addonBefore={selectBefore}
      enterButton='Search'
      placeholder='Type search text'
      allowClear={true}
      size='default'
    />
  )
}
