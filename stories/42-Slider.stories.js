import React from 'react'
import { Meta, Story, Props } from '@storybook/addon-docs/blocks'
// import { action } from '@storybook/addon-actions'
import { withKnobs, array, boolean, number, text, object, select } from '@storybook/addon-knobs'
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

// const defaultProps = () => {
//   let props = {
//     // defaultValue: number('defaultValue', 0),
//     min: number('min', 0),
//     max: number('max', 100),
//     dots: boolean('dots', false),
//     step: number('step', 0),
//     autoFocus: boolean('autoFocus', false),
//     marks: object('marks', undefined),
//     // tipFormatter: function('tipFormatter', null); // There isn't a knob type for function? Unless I eval a string?,
//     tooltipVisible: boolean('tooltipVisible', true),
//     tooltipPlacement: text('tooltipPlacement', 'top'),
//     included: boolean('included', true),
//     reverse: boolean('reverse', false),
//     range: boolean('range', false),
//     disabled: boolean('disabled', false),
//     vertical: boolean('vertical', false),
//     onChange: action('onChange'),
//     onAfterChange: action('onAfterChange')
//   }
//   // if (props.range) {
//   //   _.assign(props, {
//   //   })
//   //   _.assign(props, {
//   //     defaultValue: number('defaultValue', 0),
//   //   })
//   //   props = _.omit(props, ['defaultValue', 'defaultValueLow', 'defaultValueHigh'])
//   // } else {
//   //   props = _.omit(props, ['defaultValueLow', 'defaultValueHigh'])
//   // }
// }

const noopFormatter = (n) => `${n}`
const percentFormatter = (n) => `${n}%`

export const basicSingle = () => {
  const props = {
    min: number('min', 0),
    max: number('max', 100),
    dots: boolean('dots', false),
    step: number('step', 1),
    autoFocus: boolean('autoFocus', false),
    defaultValue: number('defaultValue', 0),
    disabled: boolean('disabled', false),
    tipFormatter: select('tipFormatter', {
      None: noopFormatter,
      // eslint-disable-next-line no-template-curly-in-string
      '(n) => `${n}%`': percentFormatter
    }, noopFormatter),
    tooltipVisible: boolean('tooltipVisible', true),
    tooltipPlacement: select('tooltipPlacement', tooltipPlacementOptions, 'top'),
    included: boolean('included', true),
    onChange: action('onChange'),
    onAfterChange: action('onAfterChange')
  }
  return (
    <MLSlider
      {...props}
    />
  )
}

const tooltipPlacementOptions = {
  topLeft: 'topLeft',
  top: 'top',
  topRight: 'topRight',
  rightTop: 'rightTop',
  right: 'right',
  rightBottom: 'rightBottom',
  bottomRight: 'bottomRight',
  bottom: 'bottom',
  bottomLeft: 'bottomLeft',
  leftBottom: 'leftBottom',
  left: 'left',
  leftTop: 'leftTop'
}

export const basicRange = () => {
  const props1 = {
    min: number('min', 0),
    max: number('max', 100),
    dots: boolean('dots', false),
    step: number('step', 1),
    autoFocus: boolean('autoFocus', false)
  }
  const defaultValueLow = number('defaultValueLow', 0)
  const defaultValueHigh = number('defaultValueHigh', 100)

  const props2 = {
    defaultValue: [defaultValueLow, defaultValueHigh],
    disabled: boolean('disabled', false),
    tipFormatter: select('tipFormatter', {
      None: noopFormatter,
      // eslint-disable-next-line no-template-curly-in-string
      '(n) => `${n}%`': percentFormatter
    }, noopFormatter),
    tooltipVisible: boolean('tooltipVisible', true),
    tooltipPlacement: select('tooltipPlacement', tooltipPlacementOptions, 'top'),
    included: boolean('included', true),
    onChange: action('onChange'),
    onAfterChange: action('onAfterChange')
  }

  return (
    <MLSlider
      range={true}
      {...props1} {...props2}
    />
  )
}
