import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'
import MLSelect from '../src/ml-select'
const { MLOption, MLOptGroup } = MLSelect

export default {
  title: 'Data Entry/MLSelect',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

// TODO: Flesh out knobs and stories when spec has been reviewed

export const basic = () => {
  const selectProps = {
    disabled: boolean('disabled', false),
    size: select('size', {
      default: 'default',
      large: 'large',
      small: 'small',
    }, 'size'),
    mode: select('mode', {
      default: undefined,
      multiple: 'multiple',
      tags: 'tags',
    }),
    placeholder: text('placeholder', ''),
    loading: boolean('loading', false),
    // allowClear: boolean('allowClear', false),
  }
  return (
    <div>
      <MLSelect style={{ width: 220 }} {...selectProps}>
        <MLOption value='jack'>Jack</MLOption>
        <MLOption value='lucy'>Lucy</MLOption>
        <MLOption value='disabled' disabled>
          Disabled
        </MLOption>
        <MLOption value='Yiminghe'>yiminghe</MLOption>
      </MLSelect>
    </div>
  )
}
