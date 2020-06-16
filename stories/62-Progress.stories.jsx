import React from 'react'
import { MLProgress } from '@marklogic/design-system'
import { number, withKnobs, radios, text } from '@storybook/addon-knobs'
import mdx from './62-Progress.mdx'

export default {
  component: MLProgress,
  title: 'Feedback/MLProgress',
  decorators: [withKnobs],
  parameters: {
    fileName: '62-Progress.stories.jsx',
    docs: {
      page: mdx,
    },
  },
}

export const Line = () => {
  const props = {}
  const size = radios('size', ['small', 'default'], 'default')
  if (size !== 'default') {
    props.size = size
  }
  return (
    <MLProgress
      style={{
        width: text('width (via style)', '100%'),
      }}
      type='line'
      {...props}
      status={radios('status', ['success', 'exception', 'normal', 'active'], 'normal')}
      percent={number('percent', 50, { range: true, min: 0, max: 100 })}
    />
  )
}

export const Circle = () => {
  const props = {}
  const width = number('width (via prop)', 132)
  if (width !== 132) {
    props.width = width
  }
  return (
    <MLProgress
      type='circle'
      {...props}
      status={radios('status', ['success', 'exception', 'normal'], 'normal')}
      percent={number('percent', 50, { range: true, min: 0, max: 100 })}
    />
  )
}

export const Dashboard = () => {
  const props = {}
  const width = number('width (via prop)', 132)
  if (width !== 132) {
    props.width = width
  }
  return (
    <MLProgress
      type='dashboard'
      {...props}
      status={radios('status', ['success', 'exception', 'normal'], 'normal')}
      percent={number('percent', 50, { range: true, min: 0, max: 100 })}
    />
  )
}
