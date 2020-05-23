import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, number, radios, text } from '@storybook/addon-knobs'
import { MLEditableSlider, MLRow, MLCol } from '@marklogic/design-system'

export default {
  title: 'Data Entry/MLEditableSlider',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basicAndRanged = () => {
  const width = text('width', '300px')
  const min = number('min', 0)
  const max = number('max', 100)
  const inputNumberSize = radios('inputNumberProps.size', ['small', 'middle', 'large'], 'small')
  const debounceTime = number('debounceTime (ms)', 200)
  return (
    <div style={{ width }}>
      <MLEditableSlider
        min={min}
        max={max}
        inputNumberProps={{
          size: inputNumberSize,
        }}
        debounceTime={debounceTime}
        onChange={action('onChange')}
      />
      <MLEditableSlider
        min={min}
        max={max}
        range={true}
        defaultValue={[20, 70]}
        inputNumberProps={{
          size: inputNumberSize,
        }}
        debounceTime={debounceTime}
        onChange={action('onChange')}
      />
    </div>
  )
}
