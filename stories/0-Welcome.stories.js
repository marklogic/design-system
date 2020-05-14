import React from 'react'
import Markdown from 'markdown-to-jsx'
import { linkTo } from '@storybook/addon-links'
import welcomeMarkdown from './0-Welcome.md'
import './0-Welcome.less'

export default {
  title: 'Welcome',
}

const Welcome = () => <Markdown children={welcomeMarkdown} />

export const toStorybook = () => <Welcome />

toStorybook.story = {
  name: 'to Storybook',
}
