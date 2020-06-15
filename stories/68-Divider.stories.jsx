import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLDivider } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'
import mdx from './68-Divider.mdx'

export default {
  title: 'Other/MLDivider',
  decorators: [withKnobs],
  parameters: {
    fileName: '68-Divider.stories.jsx',
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
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <MLDivider />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <MLDivider dashed />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
    </div>
  )
}
