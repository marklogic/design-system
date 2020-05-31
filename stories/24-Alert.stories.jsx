import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLAlert } from '@marklogic/design-system'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Feedback/Alert',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
    info: {
        text: 'Component description goes here',
    },
  },
  argTypes: {
    // type: { control: { type: 'radio', options: ['success'] } },
  },
}

export const basic = ({ ...args }) => {
  const props = {
    description: text('description', 'Some description'),
    closable: boolean('closable', false),
    showIcon: boolean('showIcon', true),
  }
  return (
    <MLAlert
      message='Success Text'
      {...args}
    />
  )
}

basic.args = {
  type: 'success',
  showIcon: true,
  description: 'Some description',
  closable: false,
}
basic.argTypes = {
  type: { control: { type: 'options', controlType: 'inline-radio', options: ['success', 'info', 'warning', 'error'] } },
}
