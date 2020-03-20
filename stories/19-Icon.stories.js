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

function iconTile({ component, props, style }) {
  const componentName = component.displayName
  return (
    <div style={style} key={componentName} className='ml-storybook-icon-tile'>
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

export const shortList = () => {
  const props = {}
  window.MLIcon = MLIcon
  const darkBackground = { backgroundColor: '#ccc' }
  return (
    <div>
      {iconTile({ component: MLIcon.UserOutlined, props, style: darkBackground })}
      {iconTile({ component: MLIcon.QuestionCircleOutlined, props, style: darkBackground })}
      {iconTile({ component: MLIcon.SearchOutlined, props, style: darkBackground })}
      {iconTile({ component: MLIcon.SettingOutlined, props, style: darkBackground })}
      {iconTile({ component: MLIcon.DashboardOutlined, props, style: darkBackground })}
      {iconTile({ component: MLIcon.Route, props })}
      {iconTile({ component: MLIcon.ArrowLeftOutlined, props })}
      {iconTile({ component: MLIcon.CheckCircleOutlined, props })}
      {iconTile({ component: MLIcon.CloseCircleOutlined, props })}
      {iconTile({ component: MLIcon.ExclamationCircleOutlined, props })}
      {iconTile({ component: MLIcon.ClockCircleOutlined, props })}
      {iconTile({ component: MLIcon.CalendarOutlined, props })}
      {iconTile({ component: MLIcon.CheckCircleFilled, props })}
      {iconTile({ component: MLIcon.InfoCircleFilled, props })}
      {iconTile({ component: MLIcon.ExclamationCircleFilled, props })}
      {iconTile({ component: MLIcon.CloseCircleFilled, props })}
      {iconTile({ component: MLIcon.LockOutlined, props })}
      {iconTile({ component: MLIcon.DownOutlined, props })}
      {iconTile({ component: MLIcon.Book, props })}
    </div>
  )
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
      color: text('color', 'red'),
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
