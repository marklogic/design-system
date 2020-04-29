import React from 'react'
import { MLProgress } from 'marklogic-ui-library'
import { number, radios, withKnobs } from '@storybook/addon-knobs'

export default {
  component: 'MLProgress',
  title: 'Feedback/MLProgress',
  decorators: [withKnobs],
}

export const Line = () => {
  return (
    <MLProgress
      type='line'
      percent={number('percent', 50, { range: true, min: 0, max: 100 })}
    />
  )
}

export const Circle = () => {
  return (
    <MLProgress
      type='circle'
      percent={number('percent', 50, { range: true, min: 0, max: 100 })}
    />
  )
}
export const Meter = () => {
  return (
    <MLProgress
      type='dashboard'
      percent={number('percent', 50, { range: true, min: 0, max: 100 })}
    />
  )
}
