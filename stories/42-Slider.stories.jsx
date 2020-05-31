import React from 'react'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { MLSlider } from '@marklogic/design-system'
import mdx from './42-Slider.mdx'

export default {
  title: 'Data Entry/MLSlider',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
    info: {
      text: 'Component description goes here',
    },
  },
}

const noopFormatter = (n) => `${n}`
const percentFormatter = (n) => `${n}%`

export const basicSingle = () => {
  const tooltipVisible = select('tooltipVisible', {
    'auto (undefined)': undefined,
    true: true,
    false: false,
  }, undefined)
  const props = {
    min: number('min', 0),
    max: number('max', 100),
    dots: boolean('dots', false),
    step: number('step', 1),
    autoFocus: boolean('autoFocus', false),
    defaultValue: number('defaultValue', 0),
    disabled: boolean('disabled', false),
    // tipFormatter: select('tipFormatter', {
    //   None: noopFormatter,
    //   // eslint-disable-next-line no-template-curly-in-string
    //   '(n) => `${n}%`': percentFormatter,
    // }, noopFormatter),
    tipFormatter: percentFormatter,
    // tooltipVisible: boolean('tooltipVisible', true),
    // tooltipPlacement: select('tooltipPlacement', tooltipPlacementOptions, 'top'),
    tooltipPlacement: 'top',
    included: boolean('included', true),
    onChange: action('onChange'),
    onAfterChange: action('onAfterChange'),
  }
  if (tooltipVisible !== '') {
    // Hack to make the undefined value work
    props.tooltipVisible = tooltipVisible
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
  leftTop: 'leftTop',
}

export const basicRange = () => {
  // Assemble the props in pieces so we can have them in the right order
  const tooltipVisible = select('tooltipVisible', {
    'auto (undefined)': undefined,
    true: true,
    false: false,
  }, undefined)
  const props1 = {
    min: number('min', 0),
    max: number('max', 100),
    dots: boolean('dots', false),
    step: number('step', 1),
    autoFocus: boolean('autoFocus', false),
  }
  const defaultValueLow = number('defaultValueLow', 0)
  const defaultValueHigh = number('defaultValueHigh', 100)
  const props2 = {
    defaultValue: [defaultValueLow, defaultValueHigh],
    disabled: boolean('disabled', false),
    tipFormatter: select('tipFormatter', {
      None: noopFormatter,
      // eslint-disable-next-line no-template-curly-in-string
      '(n) => `${n}%`': percentFormatter,
    }, noopFormatter),
    tooltipPlacement: select('tipPlacement', tooltipPlacementOptions, 'top'),
    // placement: select('tipPlacement', tooltipPlacementOptions, 'top'),
    included: boolean('included', true),
    onChange: action('onChange'),
    onAfterChange: action('onAfterChange'),
  }
  if (tooltipVisible !== '') {
    props1.tooltipVisible = tooltipVisible
  }

  return (
    <div>
      <MLSlider
        range={true}
        {...props1} {...props2}
      />
      <MLSlider
        range={true}
        {...props1} {...props2}
      />
    </div>
  )
}
