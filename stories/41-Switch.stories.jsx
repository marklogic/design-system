import React from 'react'
import { radios, withKnobs } from '@storybook/addon-knobs'
import { MLSwitch } from '@marklogic/design-system'
import { sizes } from '@marklogic/design-system/MLSwitch/MLSwitch'
import mdx from './41-Switch.mdx'

export default {
  component: MLSwitch,
  title: 'Switch (Toggle)',
  decorators: [withKnobs],
  parameters: {
    fileName: '41-Switch.stories.jsx',
    docs: {
      page: mdx,
    },
  },
}

export const Basic = () => {
  return (
    <MLSwitch
      size={radios('size', sizes, 'small')}
    />
  )
}
