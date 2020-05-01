import React from 'react'
import { action } from '@storybook/addon-actions'
import MLTooltip from '@marklogic/design-system/ml-tooltip'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Data Display/MLTooltip',
  decorators: [withKnobs],
  parameters: {
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
