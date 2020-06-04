import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs'
import { MLResult, MLButton } from '@marklogic/design-system'
import { Smile } from '@marklogic/design-system/MLIcon'

export default {
  title: 'Feedback/MLResult',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Note: On the hosted (non-local) StoryBook, this component\'s custom CSS is not currently rendering correctly. This should not affect use of the component in your app.',
    },
  },
}

export const basic = () => {
  const useCustomIcon = boolean('use custom icon', false)
  const props = {
    title: text('title', 'Title text'),
    subTitle: text('subTitle', 'Subtitle text'),
    status: radios('status', ['success', 'error', 'info', 'warning', '404', '403', '500'], 'info'),
  }
  if (useCustomIcon) {
    props.icon = <Smile />
  }
  return (
    <MLResult
      {...props}
      extra={[
        <MLButton type='primary' key='console'>
          Go Console
        </MLButton>,
        <MLButton key='buy'>Buy Again</MLButton>,
      ]}
    />
  )
}
