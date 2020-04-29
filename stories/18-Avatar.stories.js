import React from 'react'
import { MLAvatar } from '@marklogic/design-system'
import { text, withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Data Display/MLAvatar',
  component: MLAvatar,
  decorators: [withKnobs],
}

export const Basic = () => <MLAvatar size={text('size')} />

export const WithInitials = () => (
  <MLAvatar size={text('size')}>
    {text('childText', 'DHS')}
  </MLAvatar>
)
export const WithImage = () => (
  <MLAvatar
    size={text('size')}
    src={text('src', 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png')}
  />
)
