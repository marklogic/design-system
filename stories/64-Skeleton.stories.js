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
  const avatar = boolean('avatar', true)
  const props = {
    active: boolean('active', false),
    loading: boolean('loading', true),
    paragraph: boolean('paragraph', true),
    title: boolean('title', true),
  }
  if (avatar === false) {
    props.avatar = false
  }
  return (
    <MLSkeleton {...props} />
  )
}
