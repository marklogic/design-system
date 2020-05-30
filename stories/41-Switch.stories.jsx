import React from 'react'
import { radios, withKnobs } from '@storybook/addon-knobs'
import { MLSwitch } from '@marklogic/design-system'
import { sizes } from '@marklogic/design-system/MLSwitch/MLSwitch'

export default {
  component: MLSwitch,
  title: 'Data Entry/MLSwitch',
  decorators: [withKnobs],
}

export const Basic = () => {
  return (
    <MLSwitch
      size={radios('size', sizes, 'small')}
    />
  )
}
