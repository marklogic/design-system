import React from 'react'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { MLSlider } from 'marklogic-ui-library'

export default {
  title: 'Data Entry/MLSlider',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here'
    }
  }
}

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
  return <MLSlider {...props} />
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
  // Assemble the props in pieces so we can have them in the right order
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
