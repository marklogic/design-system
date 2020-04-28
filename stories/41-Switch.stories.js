import React from 'react'
import { boolean, radios, withKnobs } from '@storybook/addon-knobs'
import { MLSwitch } from 'marklogic-ui-library'
import { sizes } from 'marklogic-ui-library/ml-switch'

export default {
  component: MLSwitch,
  title: 'Data Entry/MLSwitch',
  decorators: [withKnobs],
}

export const Basic = () => {
  return (
    <MLSwitch
      size={radios('Size', sizes, 'small')}
    />
  )
}
