import React from 'react'
import Markdown from 'markdown-to-jsx'
import { linkTo } from '@storybook/addon-links'
import welcomeMarkdown from './0-Welcome.md'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { MLButton, MLAlert } from '@marklogic/design-system'
import foo from './0-Welcome.less'
// require('./0-Welcome.less')
console.log(require('../src/MLButton/style/index.less'))

console.log(foo)
debugger

export default {
  title: 'Welcome',
}

const Welcome = () => (
  <div>
    <MLAlert message='Success Text' type='success' description='foo' />
    <div>
      <MLButton type='primary' onClick={action('primary clicked')}>{text('Primary Button Text', 'Primary')}</MLButton>
      <MLButton type='highlight' onClick={action('primary clicked')}>{text('Highlight Button Text', 'Highlight')}</MLButton>
      <MLButton onClick={action('default clicked')}>{text('Default Button Text', 'Default')}</MLButton>
      <MLButton type='danger' onClick={action('danger clicked')}>{text('Danger Button Text', 'Danger')}</MLButton>
    </div>
    <Markdown className='storybook-welcome-page' children={welcomeMarkdown} />
  </div>
)

export const toStorybook = () => <Welcome />

toStorybook.story = {
  name: 'to Storybook',
}
