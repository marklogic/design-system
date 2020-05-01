import React from 'react'
import { MLAvatar } from '@marklogic/design-system'
import { text, withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Data Display/MLAvatar',
  component: MLAvatar,
  decorators: [withKnobs],
}

/** Parse knob output to allow an integer or text. */
function getSize() {
  const val = text('size', 'small')
  const parsed = parseInt(val)
  return isNaN(parsed) ? val : parsed
}

export const Basic = () => <MLAvatar size={getSize()} />

export const WithInitials = () => (
  <MLAvatar size={text('size', 'small')}>
    {text('childText', 'DHS')}
  </MLAvatar>
)
export const WithImage = () => (
  <MLAvatar
    size={text('size')}
    src={text('src', 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png')}
  />
)
