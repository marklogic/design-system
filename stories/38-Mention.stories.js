import React from 'react'
import { action } from '@storybook/addon-actions'
import MLMentions from '../src/ml-mention'
import { withKnobs } from '@storybook/addon-knobs'
const { MLOption } = MLMentions

export default {
  title: 'Data Entry/MLMentions',
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
