import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLRadio } from '@marklogic/design-system'
import { withKnobs, boolean, text, array, number } from '@storybook/addon-knobs'

export default {
  title: 'Data Entry/MLRadio',
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

export const radio = () => {
  const label = text('label', 'Radio')
  const props = {
    disabled: boolean('disabled', false),
    checked: boolean('checked', false),
  }
  return (
    <div>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      <MLRadio {...props}>{label}</MLRadio>
    </div>
  )
}

export const radioGroup = () => {
  const props = {
    name: text('name', 'radiogroup'),
    disabled: boolean('disabled', false),
    defaultValue: number('defaultValue', 1),
    onChange: action('onChange'),
  }
  return (
    <div>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      <MLRadio.MLGroup {...props}>
        <MLRadio value={1}>A</MLRadio>
        <MLRadio value={2}>B</MLRadio>
        <MLRadio value={3}>C</MLRadio>
        <MLRadio value={4}>D</MLRadio>
      </MLRadio.MLGroup>
    </div>
  )
}

export const radioGroupPlainOptions = () => {
  const props = {
    name: text('name', 'radiogroup'),
    disabled: boolean('disabled', false),
    options: array('options', ['A', 'B', 'C', 'D']),
    defaultValue: text('defaultValue', 'A'),
    onChange: action('onChange'),
  }
  return (
    <div>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      <MLRadio.MLGroup {...props} />
    </div>
  )
}

export const radioGroupWithComplexOptions = () => {
  const props = {
    name: text('name', 'radiogroup'),
    disabled: boolean('disabled', false),
    options: [
      { label: 'Apple', value: '1' },
      { label: 'Pear', value: '2' },
      { label: 'Orange', value: '3', disabled: true },
    ],
    defaultValue: number('defaultValue', 1),
    onChange: action('onChange'),
  }
  return (
    <div>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      <MLRadio.MLGroup {...props} />
    </div>
  )
}

export const radioGroupOutlinedStyle = () => {
  const props = {
    name: text('name', 'radiogroup'),
    disabled: boolean('disabled', false),
    buttonStyle: 'outline',
    defaultValue: number('defaultValue', 1),
    onChange: action('onChange'),
  }
  return (
    <div>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      <MLRadio.MLGroup {...props}>
        <MLRadio.MLButton value={1}>A</MLRadio.MLButton>
        <MLRadio.MLButton value={2}>B</MLRadio.MLButton>
        <MLRadio.MLButton value={3}>C</MLRadio.MLButton>
        <MLRadio.MLButton value={4}>D</MLRadio.MLButton>
      </MLRadio.MLGroup>
    </div>
  )
}
export const radioGroupSolidStyle = () => {
  const props = {
    name: text('name', 'radiogroup'),
    disabled: boolean('disabled', false),
    buttonStyle: 'solid',
    defaultValue: number('defaultValue', 1),
    onChange: action('onChange'),
  }
  return (
    <div>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      <MLRadio.MLGroup {...props}>
        <MLRadio.MLButton value={1}>A</MLRadio.MLButton>
        <MLRadio.MLButton value={2}>B</MLRadio.MLButton>
        <MLRadio.MLButton value={3}>C</MLRadio.MLButton>
        <MLRadio.MLButton value={4}>D</MLRadio.MLButton>
      </MLRadio.MLGroup>
    </div>
  )
}
