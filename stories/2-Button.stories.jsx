import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import { MLButton } from '@marklogic/design-system'
import mdx from './2-Button.mdx'

export default {
  title: 'General/MLButton',
  decorators: [withKnobs],
  parameters: {
    fileName: '2-Button.stories.jsx',
    docs: {
      page: mdx,
    },
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => (
  <div>
    <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
    <MLButton type='primary' onClick={action('clicked')}>{text('Primary Button Text', 'Primary')}</MLButton>
  </div>
)

export const multiple = () => (
  <div>
    <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
    <MLButton type='primary' onClick={action('primary clicked')}>{text('Primary Button Text', 'Primary')}</MLButton>
    <MLButton type='highlight' onClick={action('primary clicked')}>{text('Highlight Button Text', 'Highlight')}</MLButton>
    <MLButton onClick={action('default clicked')}>{text('Default Button Text', 'Default')}</MLButton>
    <MLButton type='danger' onClick={action('danger clicked')}>{text('Danger Button Text', 'Danger')}</MLButton>
  </div>
)

export const disabled = () => (
  <div>
    <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
    <MLButton disabled onClick={action('clicked')}>{text('Disabled', 'Disabled')}</MLButton>
  </div>
)
