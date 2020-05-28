import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { MLSkeleton } from '@marklogic/design-system'

export default {
  title: 'Feedback/MLSkeleton',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
    active: boolean('active', false),
    avatar: boolean('avatar', true),
    loading: boolean('loading', true),
    paragraph: boolean('paragraph', true),
    // paragraph: {rows: 4},
    title: boolean('title', true),
  }
  return (
    <MLSkeleton {...props} />
  )
}
