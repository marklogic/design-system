import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import MLButton from '../src/ml-button'

export default {
  title: 'MLButton',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => <MLButton type='primary' onClick={action('clicked')}>{text('Primary Button Text', 'Primary')}</MLButton>

export const multiple = () => (
  <>
    <MLButton type='primary' onClick={action('primary clicked')}>{text('Primary Button Text', 'Primary')}</MLButton>
    <MLButton onClick={action('default clicked')}>{text('Default Button Text', 'Default')}</MLButton>
    <MLButton type='danger' onClick={action('danger clicked')}>{text('Danger Button Text', 'Danger')}</MLButton>
  </>
)

export const disabled = () => <MLButton disabled onClick={action('clicked')}>{text('Disabled', 'Disabled')}</MLButton>
