import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLCarousel } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'
import './49-Carousel.less'

export default {
  title: 'Data Display/MLCarousel',
  decorators: [withKnobs],
  parameters: {
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
