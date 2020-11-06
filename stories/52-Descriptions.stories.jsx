import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, number, radios, withKnobs } from '@storybook/addon-knobs'
import { MLDescriptions } from '@marklogic/design-system'
import mdx from './52-Descriptions.mdx'

export default {
  title: 'Descriptions',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
    fileName: '52-Descriptions.stories.jsx',
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
    size: radios('size', ['default', 'middle', 'small'], 'default'),
    bordered: boolean('bordered', false),
    column: {
      xxl: number('column.xxl', 4),
      xl: number('column.xl', 3),
      lg: number('column.lg', 3),
      md: number('column.md', 3),
      sm: number('column.sm', 2),
      xs: number('column.xs', 1),
    },

  }
  return (
    <MLDescriptions title='User Info' {...props}>
      <MLDescriptions.MLItem label='UserName'>Zhou Maomao</MLDescriptions.MLItem>
      <MLDescriptions.MLItem label='Telephone'>1810000000</MLDescriptions.MLItem>
      <MLDescriptions.MLItem label='Live'>Hangzhou, Zhejiang</MLDescriptions.MLItem>
      <MLDescriptions.MLItem label='Remark'>empty</MLDescriptions.MLItem>
      <MLDescriptions.MLItem label='Address'>
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </MLDescriptions.MLItem>
    </MLDescriptions>
  )
}
