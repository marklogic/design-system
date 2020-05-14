import React from 'react'
import { MLProgress } from '@marklogic/design-system'
import { number, withKnobs, radios } from '@storybook/addon-knobs'

export default {
  component: MLProgress,
  title: 'Feedback/MLProgress',
  decorators: [withKnobs],
}

export const Line = () => {
  return (
    <MLProgress
      type='line'
      status={radios('status', ['success', 'exception', 'normal', 'active'], 'normal')}
      percent={number('percent', 50, { range: true, min: 0, max: 100 })}
    />
  )
}

export const Circle = () => {
  return (
    <MLProgress
      type='circle'
      status={radios('status', ['success', 'exception', 'normal'], 'normal')}
      percent={number('percent', 50, { range: true, min: 0, max: 100 })}
    />
  )
}
export const Meter = () => {
  return (
    <MLProgress
      type='dashboard'
      status={radios('status', ['success', 'exception', 'normal'], 'normal')}
      percent={number('percent', 50, { range: true, min: 0, max: 100 })}
    />
  )
}
