import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { MLEmpty } from '@marklogic/design-system'
import mdx from './21-Empty.mdx'

export default {
  title: 'Empty',
  decorators: [withKnobs],
  parameters: {
    fileName: '21-Empty.stories.jsx',
    docs: {
      page: mdx,
    },
    info: {
      text: 'Note that you do not need to supply the `image` prop; the Story Source shows the default value here unnecessarily.',
    },
  },
}

export const basic = () => {
  return (
    <MLEmpty />
  )
}
