import React from 'react'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { MLInputNumber } from '@marklogic/design-system'

export default {
  title: 'Data Entry/MLInputNumber',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here'
    }
  }
}

export const basic = () => {
  const props = {
    defaultValue: number('defaultValue', undefined),
    disabled: boolean('disabled', false),
    parser: select('parser', {
      None: (s) => s,
      "(s) => (s).replace('%', '')": (s) => (s).replace('%', '')
    }, undefined),
    formatter: select('formatter', {
      None: (s) => s,
      // eslint-disable-next-line no-template-curly-in-string
      '(s) => `${s}%`': (s) => `${s}%`
    }, undefined),
    size: select('size', {
      small: 'small',
      middle: 'middle',
      large: 'large'
    }, 'small'),
    min: number('min', 0),
    max: number('max', 100),
    step: number('step', 1),
    precision: number('precision', 0),
    onChange: action('onChange'),
    onPressEnter: action('onPressEnter')
  }
  return (<MLInputNumber {...props} />)
}

export const disabled = () => {
  const props = {
    defaultValue: number('defaultValue', undefined),
    disabled: boolean('disabled', true),
    parser: select('parser', {
      None: (s) => s,
      "(s) => (s).replace('%', '')": (s) => (s).replace('%', '')
    }, undefined),
    formatter: select('formatter', {
      None: (s) => s,
      // eslint-disable-next-line no-template-curly-in-string
      '(s) => `${s}%`': (s) => `${s}%`
    }, undefined),
    size: select('size', {
      small: 'small',
      middle: 'middle',
      large: 'large'
    }, 'small'),
    min: number('min', 0),
    max: number('max', 100),
    step: number('step', 1),
    precision: number('precision', 0),
    onChange: action('onChange'),
    onPressEnter: action('onPressEnter')
  }
  return (<MLInputNumber {...props} />)
}
export const formatter = () => {
  const props = {
    defaultValue: number('defaultValue', undefined),
    disabled: boolean('disabled', true),
    parser: select('parser', {
      None: (s) => s,
      "(s) => (s).replace('%', '')": (s) => (s).replace('%', '')
    }, (s) => (s).replace('%', '')),
    formatter: select('formatter', {
      None: (s) => s,
      // eslint-disable-next-line no-template-curly-in-string
      '(s) => `${s}%`': (s) => `${s}%`
    }, (s) => `${s}%`),
    size: select('size', {
      small: 'small',
      middle: 'middle',
      large: 'large'
    }, 'small'),
    min: number('min', 0),
    max: number('max', 100),
    step: number('step', 1),
    precision: number('precision', 0),
    onChange: action('onChange'),
    onPressEnter: action('onPressEnter')
  }
  return (<MLInputNumber {...props} />)
}
export const sizes = () => {
  const props = {
    defaultValue: number('defaultValue', undefined),
    disabled: boolean('disabled', true),
    parser: select('parser', {
      None: (s) => s,
      "(s) => (s).replace('%', '')": (s) => (s).replace('%', '')
    }, (s) => (s).replace('%', '')),
    formatter: select('formatter', {
      None: (s) => s,
      // eslint-disable-next-line no-template-curly-in-string
      '(s) => `${s}%`': (s) => `${s}%`
    }, (s) => `${s}%`),
    min: number('min', 0),
    max: number('max', 100),
    step: number('step', 1),
    precision: number('precision', 0),
    onChange: action('onChange'),
    onPressEnter: action('onPressEnter')
  }
  return (
    <div>
      <MLInputNumber {...props} size='small' />
      <MLInputNumber {...props} size='middle' />
      <MLInputNumber {...props} size='large' />
    </div>
  )
}
export const decimals = () => {
  const props = {
    defaultValue: number('defaultValue', undefined),
    disabled: boolean('disabled', false),
    parser: select('parser', {
      None: (s) => s,
      "(s) => (s).replace('%', '')": (s) => (s).replace('%', '')
    }, undefined),
    formatter: select('formatter', {
      None: (s) => s,
      // eslint-disable-next-line no-template-curly-in-string
      '(s) => `${s}%`': (s) => `${s}%`
    }, undefined),
    size: select('size', {
      small: 'small',
      middle: 'middle',
      large: 'large'
    }, 'small'),
    min: number('min', 0),
    max: number('max', 100),
    step: number('step', 0.1),
    precision: number('precision', 1),
    onChange: action('onChange'),
    onPressEnter: action('onPressEnter')
  }
  return (<MLInputNumber {...props} />)
}
