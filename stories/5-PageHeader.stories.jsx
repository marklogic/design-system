import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLPageHeader } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'
import mdx from './5-PageHeader.mdx'

export default {
  title: 'Navigation/MLPageHeader',
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

export const basic = () => {
  return (
    <MLPageHeader
      className='site-page-header'
      onBack={action('onBack')}
      title='Title'
      subTitle='This is a subtitle'
    />
  )
}
