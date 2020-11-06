import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, number } from '@storybook/addon-knobs'
import { MLAffix, MLButton } from '@marklogic/design-system'
import mdx from './30-Affix.mdx'

export default {
  title: 'Affix (Anchor)',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
    fileName: '30-Affix.stories.jsx',
    info: {
      text: 'Wrap Affix around another component to make it stick the viewport.',
    },
  },
}

export const basic = () => {
  const offsetTop = number('offsetTop', 24)
  const offsetBottom = number('offsetBottom', 24)
  const props = {
    onChange: action('onChange'),
  }
  return (
    <div>
      <MLAffix offsetTop={offsetTop} {...props}>
        <MLButton type='primary'>
          Affix top
        </MLButton>
      </MLAffix>
      <br />
      <MLAffix offsetBottom={offsetBottom} {...props}>
        <MLButton type='primary'>
          Affix bottom
        </MLButton>
      </MLAffix>
    </div>
  )
}
