import React from 'react'
import Markdown from 'markdown-to-jsx'
import { linkTo } from '@storybook/addon-links'
import welcomeMarkdown from './0-Welcome.md'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { MLButton, MLAlert } from '@marklogic/design-system'

export default {
  title: 'Welcome',
  parameters: {
    fileName: '0-Welcome.stories.jsx',
  },
}

const Welcome = () => (
  <Markdown className='storybook-welcome-page' children={welcomeMarkdown} />
)

export const toStorybook = () => <Welcome />

toStorybook.story = {
  name: 'to Storybook',
}
