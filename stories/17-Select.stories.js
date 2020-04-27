import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'
import MLSelect from '../src/ml-select'
import { filter, isUndefined } from 'lodash-es'
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

function filterUndefinedProps(props) {
  return Object.fromEntries(
    filter(
      Object.entries(props),
      (pair) => !isUndefined(pair[1]),
    ),
  )
}

export const basic = () => {
  const selectProps = {
    disabled: boolean('disabled', false),
    size: select('size', {
      default: 'default',
      large: 'large',
      small: 'small',
    }, 'small'),
    mode: select('mode', {
      default: undefined,
      multiple: 'multiple',
      tags: 'tags',
    }, undefined),
    placeholder: text('placeholder', ''),
    loading: boolean('loading', false),
    allowClear: boolean('allowClear', false),
    onBlur: action('onBlur'),
    onChange: action('onChange'),
    onDeselect: action('onDeselect'),
    onFocus: action('onFocus'),
    onInputKeyDown: action('onInputKeyDown'),
    onMouseEnter: action('onMouseEnter'),
    onMouseLeave: action('onMouseLeave'),
    onPopupScroll: action('onPopupScroll'),
    onSearch: action('onSearch'),
    onSelect: action('onSelect'),
  }
  const filteredProps = filterUndefinedProps(selectProps)
  return (
    <MLSelect style={{ width: 220 }} {...filteredProps}>
      <MLOption value='jack'>Jack</MLOption>
      <MLOption value='lucy'>Lucy</MLOption>
      <MLOption value='disabled' disabled>
        Disabled
      </MLOption>
      <MLOption value='Yiminghe'>yiminghe</MLOption>
    </MLSelect>
  )
}

export const withOptGroup = () => {
  const selectProps = {
    disabled: boolean('disabled', false),
    size: select('size', {
      default: 'default',
      large: 'large',
      small: 'small',
    }, 'small'),
    mode: select('mode', {
      default: undefined,
      multiple: 'multiple',
      tags: 'tags',
    }, undefined),
    placeholder: text('placeholder', ''),
    loading: boolean('loading', false),
    allowClear: boolean('allowClear', false),
    onBlur: action('onBlur'),
    onChange: action('onChange'),
    onDeselect: action('onDeselect'),
    onFocus: action('onFocus'),
    onInputKeyDown: action('onInputKeyDown'),
    onMouseEnter: action('onMouseEnter'),
    onMouseLeave: action('onMouseLeave'),
    onPopupScroll: action('onPopupScroll'),
    onSearch: action('onSearch'),
    onSelect: action('onSelect'),
  }
  const filteredProps = filterUndefinedProps(selectProps)
  return (
    <MLSelect defaultValue='lucy' style={{ width: 200 }} {...filteredProps}>
      <MLOptGroup key='Manager' label='Manager'>
        <MLOption key='jack' value='jack'>Jack</MLOption>
        <MLOption key='lucy' value='lucy'>Lucy</MLOption>
      </MLOptGroup>
      <MLOptGroup key='Engineer' label='Engineer'>
        <MLOption key='Yiminghe' value='Yiminghe'>yiminghe</MLOption>
      </MLOptGroup>
    </MLSelect>
  )
}
