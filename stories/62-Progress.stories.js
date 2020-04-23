import React from 'react'
import { MLProgress } from 'marklogic-ui-library'
import { progressTypes } from 'marklogic-ui-library/ml-progress'
import { number, radios, withKnobs } from '@storybook/addon-knobs'

export default {
  component: 'MLProgress',
  title: 'Feedback/MLProgress',
  decorators: [withKnobs],
}

export const Basic = () => {
  return <MLProgress
    percent={number('Percent', 50, { range: true, min: 0, max: 100 })}
    type={radios('Type', progressTypes)}
  />
}
