import React from 'react'
import { action } from '@storybook/addon-actions'
import MLTag from '@marklogic/design-system/ml-tag'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Data Display/MLTag',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

function preventDefault(e) {
  e.preventDefault()
  console.log('Clicked! But prevent default.')
}

export const basic = () => {
  const props = {
  }
  return (
    <div>
      <MLTag>Tag 1</MLTag>
      <MLTag>
        <a href='https://github.com/ant-design/ant-design/issues/1862'>Link</a>
      </MLTag>
      <MLTag closable onClose={action('onClose')}>
        Tag 2
      </MLTag>
      <MLTag closable onClose={preventDefault}>
        Prevent Default
      </MLTag>
    </div>
  )
}
