import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, number, boolean, radios } from '@storybook/addon-knobs'
import { MLPagination } from '@marklogic/design-system'
import mdx from './6-Pagination.mdx'

export default {
  title: 'Navigation/MLPagination',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
    fileName: '6-Pagination.stories.jsx',
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const showQuickJumper = radios('showQuickJumper', {
    auto: 'auto',
    true: 'true',
    false: 'false',
  }, 'auto')
  const extras = {}
  if (showQuickJumper === 'true') {
    extras.showQuickJumper = true
  } else if (showQuickJumper === 'false') {
    extras.showQuickJumper = false
  }
  return (
    <MLPagination
      size={radios('size', ['default', 'small'], 'default')}
      total={number('total', 50)}
      showSizeChanger={boolean('showSizeChanger', true)}
      disabled={boolean('disabled', false)}
      simple={boolean('simple', false)}
      {...extras}
      onChange={action('change')}
      onShowSizeChange={action('onShowSizeChange')}
    />
  )
}
