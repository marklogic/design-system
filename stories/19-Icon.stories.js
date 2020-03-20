import React from 'react'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { MLIcon } from '../src'
import * as FontAwesomeOriginalIcons from '@fortawesome/free-solid-svg-icons'
import { config as FontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { storiesOf } from '@storybook/react'

export default {
  title: 'General/MLIcon',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const iconList = () => {
  const list = []
  for (const [componentName, component] of Object.entries(MLIcon)) {
    list.push((
      React.createElement(component)
    ))
  }
  return (
    <div>
      {list}
    </div>
  )
}

// const stories = storiesOf('MLIcon', module)
//   .addDecorator(withKnobs)
//   .addParameters({
//     info: {
//       text: 'Component description goes here',
//     },
//   })
//
// for (const [componentName, component] of Object.entries(MLIcon)) {
//   debugger;
//   stories.add(componentName, () => (
//     React.createElement(component)
//   ))
// }
