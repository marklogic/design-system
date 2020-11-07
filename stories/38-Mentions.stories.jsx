import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLMentions } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'
import mdx from './38-Mentions.mdx'
const { MLOption } = MLMentions

export default {
  title: 'Mentions (Tag)',
  decorators: [withKnobs],
  parameters: {
    fileName: '38-Mentions.stories.jsx',
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
    <MLMentions
      style={{ width: '100%' }}
      onChange={action('onChange')}
      onSelect={action('onSelect')}
      defaultValue='@afc163'
    >
      <MLOption value='afc163'>afc163</MLOption>
      <MLOption value='zombieJ'>zombieJ</MLOption>
      <MLOption value='yesmeck'>yesmeck</MLOption>
    </MLMentions>
  )
}
