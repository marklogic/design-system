import React from 'react'
import { MLAvatar } from '@marklogic/design-system'
import { text, withKnobs } from '@storybook/addon-knobs'
import mdx from './18-Avatar.mdx'

export default {
  title: 'Data Display/MLAvatar',
  component: MLAvatar,
  decorators: [withKnobs],
  parameters: {
    fileName: '18-Avatar.stories.jsx',
    docs: {
      page: mdx,
    },
  },
}

/** Parse knob output to allow an integer or text. */
function getSize() {
  const val = text('size', 'small')
  const parsed = parseInt(val)
  return isNaN(parsed) ? val : parsed
}

export const Basic = () => <MLAvatar size={getSize()} />

export const WithInitials = () => (
  <MLAvatar size={getSize()}>
    {text('childText', 'DHS')}
  </MLAvatar>
)
export const WithImage = () => (
  <MLAvatar
    size={getSize()}
    src={text('src', 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png')}
  />
)
