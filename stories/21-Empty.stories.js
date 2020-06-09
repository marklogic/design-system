import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { MLEmpty } from '@marklogic/design-system'

export default {
  title: 'Data Display/MLEmpty',
  decorators: [withKnobs],
  parameters: {
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
