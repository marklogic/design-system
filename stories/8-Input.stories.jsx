import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, radios, boolean } from '@storybook/addon-knobs'
import {
  MLAutoComplete,
  MLCol,
  MLDatePicker,
  MLInput,
  MLInputNumber,
  MLRow,
  MLSelect,
} from '@marklogic/design-system'
import mdx from './8-Input.mdx'

export default {
  title: 'Data Entry/MLInput',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
    docs: {
      page: mdx,
    },
  },
}

export const basic = () => {
  const size = radios('size', ['large', 'default', 'small'], 'small')
  const selectAddon = (
    <MLSelect size={size} defaultValue='all' style={{ width: '130px' }}>
      <MLSelect.MLOption value='all'>Example Select</MLSelect.MLOption>
    </MLSelect>
  )
  const showAddonBefore = boolean('include addonBefore', false)
  const showAddonAfter = boolean('include addonAfter', false)
  const props = {
    size: size,
    addonBefore: showAddonBefore ? selectAddon : undefined,
    addonAfter: showAddonAfter ? selectAddon : undefined,
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
      <div>
        Note: Due to a bug in Ant, any of <code>allowClear</code> (on by default), <code>prefix</code>, or <code>suffix</code> are set, then the <code>style</code> property may not behave as expected due to the &lt;input&gt; element being wrapped in a &lt;span&gt;
      </div>
      <br />
      <MLInput.MLGroup size={size} compact>
        <MLInput placeholder='MLInput' style={{ width: '25%' }} />
        <MLInput.MLSearch placeholder='MLInput.MLSearch' style={{ width: '25%' }} />
        <MLInput.MLPassword placeholder='MLInput.MLPassword' style={{ width: '25%' }} />
        <MLInput.MLTextArea placeholder='MLInput.MLTextArea' />
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
        <MLSelect defaultValue='Zhejiang'>
          <MLSelect.MLOption value='Zhejiang'>Zhejiang</MLSelect.MLOption>
          <MLSelect.MLOption value='Jiangsu'>Jiangsu</MLSelect.MLOption>
        </MLSelect>
        <MLInput style={{ width: '50%' }} defaultValue='Xihu District, Hangzhou' />
      </MLInput.MLGroup>
      <br />
      <MLInput.MLGroup size={size} compact>
        <MLSelect defaultValue='Option1'>
          <MLSelect.MLOption value='Option1'>Option1</MLSelect.MLOption>
          <MLSelect.MLOption value='Option2'>Option2</MLSelect.MLOption>
        </MLSelect>
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
        <MLSelect defaultValue='Option1-1'>
          <MLSelect.MLOption value='Option1-1'>Option1-1</MLSelect.MLOption>
          <MLSelect.MLOption value='Option1-2'>Option1-2</MLSelect.MLOption>
        </MLSelect>
        <MLSelect defaultValue='Option2-2'>
          <MLSelect.MLOption value='Option2-1'>Option2-1</MLSelect.MLOption>
          <MLSelect.MLOption value='Option2-2'>Option2-2</MLSelect.MLOption>
        </MLSelect>
      </MLInput.MLGroup>
      <br />
      <MLInput.MLGroup size={size} compact>
        <MLSelect defaultValue='1'>
          <MLSelect.MLOption value='1'>Between</MLSelect.MLOption>
          <MLSelect.MLOption value='2'>Except</MLSelect.MLOption>
        </MLSelect>
        <MLInput
          style={{ width: 100, textAlign: 'center' }}
          placeholder='Minimum'
          allowClear={false}
        />
        <MLInput
          style={{
            width: 30,
            borderLeft: 0,
            pointerEvents: 'none',
            backgroundColor: '#fff',
          }}
          allowClear={false}
          placeholder='~'
          disabled
        />
        <MLInput
          style={{ width: 100, textAlign: 'center', borderLeft: 0 }}
          placeholder='Maximum'
          allowClear={false}
        />
      </MLInput.MLGroup>
      <br />
      <MLInput.MLGroup size={size} compact>
        <MLSelect defaultValue='Sign Up'>
          <MLSelect.MLOption value='Sign Up'>Sign Up</MLSelect.MLOption>
          <MLSelect.MLOption value='Sign In'>Sign In</MLSelect.MLOption>
        </MLSelect>
        <MLAutoComplete
          // dataSource={this.state.dataSource}
          style={{ width: 200 }}
          placeholder='Email'
        />
      </MLInput.MLGroup>
      <br />
      {/* <MLInput.MLGroup size={size} compact> */}
      {/*  <MLSelect style={{ width: '30%' }} defaultValue='Home'> */}
      {/*    <MLSelect.MLOption value='Home'>Home</MLSelect.MLOption> */}
      {/*    <MLSelect.MLOption value='Company'>Company</MLSelect.MLOption> */}
      {/*  </MLSelect> */}
      {/*  <Cascader style={{ width: '70%' }} options={options} placeholder='Select Address' /> */}
      {/* </MLInput.MLGroup> */}
    </div>
  )
}

// TODO: Did we want a SearchBar component, or just a story for it?
// TODO: Switch to MLSelect/MLOption
export const searchBar = () => {
  const selectBefore = (
    <MLSelect defaultValue='all' style={{ width: '130px' }}>
      <MLSelect.MLOption value='all'>All Entities</MLSelect.MLOption>
    </MLSelect>
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
