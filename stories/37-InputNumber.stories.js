import React from 'react'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { MLInputNumber } from '../src'

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
}
export const formatter = () => {
}
export const sizes = () => {
}
export const decimals = () => {
}
