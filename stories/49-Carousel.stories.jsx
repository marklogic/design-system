import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLCarousel } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'
import './49-Carousel.less'
import mdx from './49-Carousel.mdx'

export default {
  title: 'Data Display/MLCarousel',
  decorators: [withKnobs],
  parameters: {
    fileName: '49-Carousel.stories.jsx',
    docs: {
      page: mdx,
    },
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
  }
  return (
    <MLCarousel {...props}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </MLCarousel>
  )
}
