import React from 'react'
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs'
import { MLIcon } from '../src'
import { AntIcons, FontAwesomeIcons } from '../src/ml-icon'
import './19-Icon.css'

export default {
  title: 'General/MLIcon',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

function iconTile({ componentName, component, props }) {
  return (
    <div key={componentName} className='ml-storybook-icon-tile'>
      <div className='ml-storybook-icon'>
        {React.createElement(component, props)}
      </div>
      <div className='ml-storybook-icon-name'>
        {/* {`<${componentName}\u00A0/>` /* \u00A0 is nonbreaking space *!/ */}
        {componentName}
      </div>
    </div>
  )
}

export const exampleIcon = () => {
  const props = {
    highlight: boolean('highlight', true),
    spin: boolean('spin', false),
    rotate: number('rotate', 0),
    style: {
      fontSize: number('fontSize', 36) + 'px',
      color: text('color', 'red'),
    },
  }
  const component = AntIcons.CheckCircleFilled
  return (
    iconTile({
      componentName: component.displayName,
      component,
      props,
    })
  )
}

const antIconSets = {}
for (const variant of ['Filled', 'Outlined', 'TwoTone']) {
  antIconSets[variant] = {}
  for (const [key, value] of Object.entries(AntIcons)) {
    if (_.endsWith(key, variant)) {
      antIconSets[variant][key] = value
    }
  }
}

export const iconList = () => {
  const filters = {
    showAntIcons: boolean('show Ant icons', true),
    antIconVariant: select('Ant icon variant', {
      Filled: 'Filled',
      Outlined: 'Outlined',
      TwoTone: 'TwoTone',
    }, 'Filled'),
    showFontAwesomeIcons: boolean('show FontAwesome icons', true),
    style: {
      fontSize: number('fontSize', 36) + 'px',
      color: text('red'),
    },
  }
  const props = {
    highlight: boolean('highlight', true),
    spin: boolean('spin', false),
    style: select('style', {
      None: {},
      Color: { color: 'red' },
      fontSize: { fontSize: '20px' },
    }, {}),
    rotate: number('rotate', 0),
  }
  const iconSets = []
  if (filters.showAntIcons) {
    iconSets.push(antIconSets[filters.antIconVariant])
  }
  if (filters.showFontAwesomeIcons) {
    iconSets.push(FontAwesomeIcons)
  }
  const list = []
  for (const iconSet of iconSets) {
    for (const [componentName, component] of Object.entries(iconSet)) {
      list.push((
        iconTile({
          componentName,
          component,
          props,
        })
      ))
    }
  }
  return (
    <div className='ml-storybook-icon-list'>
      {list}
    </div>
  )
}
