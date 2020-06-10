import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, radios, withKnobs } from '@storybook/addon-knobs'
import { MLCascader } from '@marklogic/design-system'

export default {
  title: 'Data Entry/MLCascader',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
          children: [
            {
              value: 'foo',
              label: 'Foo',
            },
          ],
        },
      ],
    },
  ]
  return (
    <MLCascader
      defaultValue={['zhejiang', 'hangzhou', 'xihu']}
      options={options}
      expandTrigger={radios('expandTrigger', ['click', 'hover'], 'click')}
      changeOnSelect={boolean('changeOnSelect', false)}
      size={radios('size', ['large', 'default', 'small'], 'small')}
      onChange={action('onChange')}
      placeholder='Please select'
    />
  )
}
