import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLTooltip } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'
import mdx from './23-Tooltip.mdx'

export default {
  title: 'Tooltip',
  decorators: [withKnobs],
  parameters: {
    fileName: '23-Tooltip.stories.jsx',
    docs: {
      page: mdx,
    },
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
  }
  return (
    <MLTooltip title='prompt text'>
      <span>Tooltip will show on mouse enter.</span>
    </MLTooltip>
  )
}
