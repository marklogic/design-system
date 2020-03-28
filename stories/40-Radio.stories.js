import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLRadio } from 'marklogic-ui-library'
import { withKnobs, boolean, text, array, number } from '@storybook/addon-knobs'

export default {
  title: 'Data Entry/MLRadio',
  decorators: [withKnobs],
  parameters: {
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
  return (<MLRadio {...props}>{label}</MLRadio>)
}

const MultiRadioComponent = (props) => {
  return (
    <div>
      <MLRadio {...props}>1</MLRadio>
      <MLRadio {...props}>2</MLRadio>
      <MLRadio {...props}>3</MLRadio>
    </div>
  )
}

export const multiRadio = () => {
  const label = text('label', 'Radio')
  const props = {
    name: 'group',
    disabled: boolean('disabled', false),
    // checked: boolean('checked', false),
  }
  return (
    <MultiRadioComponent {...props} />
    // <div>
    //   <MLRadio {...props}>1</MLRadio>
    //   <MLRadio {...props}>2</MLRadio>
    //   <MLRadio {...props}>3</MLRadio>
    // </div>
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
    <MLRadio.MLGroup {...props}>
      <MLRadio value={1}>A</MLRadio>
      <MLRadio value={2}>B</MLRadio>
      <MLRadio value={3}>C</MLRadio>
      <MLRadio value={4}>D</MLRadio>
    </MLRadio.MLGroup>
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
    <MLRadio.MLGroup {...props} />
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
    <MLRadio.MLGroup {...props} />
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
    <MLRadio.MLGroup {...props}>
      <MLRadio.MLButton value={1}>A</MLRadio.MLButton>
      <MLRadio.MLButton value={2}>B</MLRadio.MLButton>
      <MLRadio.MLButton value={3}>C</MLRadio.MLButton>
      <MLRadio.MLButton value={4}>D</MLRadio.MLButton>
    </MLRadio.MLGroup>
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
    <MLRadio.MLGroup {...props}>
      <MLRadio.MLButton value={1}>A</MLRadio.MLButton>
      <MLRadio.MLButton value={2}>B</MLRadio.MLButton>
      <MLRadio.MLButton value={3}>C</MLRadio.MLButton>
      <MLRadio.MLButton value={4}>D</MLRadio.MLButton>
    </MLRadio.MLGroup>
  )
}
