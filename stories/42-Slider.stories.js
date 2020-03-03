import React from 'react'
import { Meta, Story, Props } from '@storybook/addon-docs/blocks'
// import { action } from '@storybook/addon-actions'
import { withKnobs, array, boolean, number, text, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import MLSlider from '../src/ml-slider'
import _ from 'lodash'

export default {
  title: 'Data Entry/MLSlider',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here'
    }
  }
}

const defaultProps = () => ({
  // defaultValue: number('defaultValue', 0),
  min: number('min', 0),
  max: number('max', 100),
  dots: boolean('dots', false),
  marks: object('marks', undefined),
  // tipFormatter: function('tipFormatter', null); // There isn't a knob type for function? Unless I eval a string?,
  tooltipVisible: boolean('tooltipVisible', true),
  tooltipPlacement: text('tooltipPlacement', 'top'),
  included: boolean('included', true),
  reverse: boolean('reverse', false),
  range: boolean('range', false),
  disabled: boolean('disabled', false),
  vertical: boolean('vertical', false),
  onChange: action('onChange'),
  onAfterChange: action('onAfterChange')
})

export const basicSingle = () => {
  const props = defaultProps()
  return (
    <MLSlider
      {...props}
    />
  )
}

export const basicRange = () => {
  const props = _.extend(
    {
      range: boolean('range', true),
      defaultValue: array('defaultValue', ['20', '50'])
    },
    _.omit(defaultProps(), 'defaultValue')
  )
  return (
    <MLSlider
      {...props}
    />
  )
}

export const disabled = () => {
  const props = _.extend(
    {
      disabled: boolean('disabled', true)
    },
    _.omit(defaultProps(), 'disabled')
  )
  return (
    <MLSlider
      {...props}
    />
  )
}
