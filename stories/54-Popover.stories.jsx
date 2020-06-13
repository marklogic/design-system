import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, radios, withKnobs } from '@storybook/addon-knobs'
import { MLPopover, MLButton } from '@marklogic/design-system'
import './54-Popover.less'
import mdx from './54-Popover.mdx'

export default {
  title: 'Data Display/MLPopover',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
    fileName: '54-Popover.stories.jsx',
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const placement = radios('placement', [
    'topLeft',
    'top',
    'topRight',
    'leftTop',
    'left',
    'leftBottom',
    'rightTop',
    'right',
    'rightBottom',
    'bottomLeft',
    'bottom',
    'bottomRight',
  ], 'top')
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )
  return (
    <div className='popover-story-demo-container'>
      <MLPopover
        content={content}
        title='Title'
        placement={placement}
        arrowPointAtCenter={boolean('arrowPointAtCenter', false)}
      // okText={text('okText', 'OK')}
      >
        <MLButton type='primary'>Hover me</MLButton>
      </MLPopover>
    </div>
  )
}
