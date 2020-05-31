import React from 'react'
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs'
import { MLIcon } from '@marklogic/design-system'
import * as AntIcons from '@marklogic/design-system/MLIcon/ant-icons'
import * as FontAwesomeIcons from '@marklogic/design-system/MLIcon/font-awesome-icons'
import './19-Icon.css'
import { endsWith } from 'lodash-es'

export default {
  title: 'General/MLIcon',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
    info: {
        text: 'Component description goes here',
    },
  },
}

function iconTile({ component, props, tileStyle }) {
  const componentName = component.displayName
  const style = {
    backgroundColor: text('backgroundColor', '#ccc'),
    height: props.style.fontSize,
    lineHeight: props.style.fontSize,
  }
  return (
    <div key={componentName} className='ml-storybook-icon-tile'>
      <div style={style} className='ml-storybook-icon'>
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
      fontSize: number('fontSize (px)', 36) + 'px',
      color: text('color', 'red'),
    },
  }
  const component = AntIcons.CheckCircleFilled
  return (
    <div>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      {iconTile({
        component,
        props,
      })}
    </div>
  )
}

const antIconSets = {}
for (const variant of ['Filled', 'Outlined', 'TwoTone']) {
  antIconSets[variant] = {}
  for (const [key, value] of Object.entries(AntIcons)) {
    if (endsWith(key, variant)) {
      antIconSets[variant][key] = value
    }
  }
}

export const shortList = () => {
  const props = {
    highlight: boolean('highlight', false),
    spin: boolean('spin', false),
    rotate: number('rotate', 0),
    style: {
      fontSize: number('fontSize (px)', 36) + 'px',
      color: text('color', null),
    },
  }
  return (
    <div>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      {iconTile({ component: MLIcon.UserOutlined, props })}
      {iconTile({ component: MLIcon.QuestionCircleOutlined, props })}
      {iconTile({ component: MLIcon.SearchOutlined, props })}
      {iconTile({ component: MLIcon.SettingOutlined, props })}
      {iconTile({ component: MLIcon.DashboardOutlined, props })}
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

export const completeList = () => {
  const filters = {
    showAntIcons: boolean('show Ant icons', true),
    antIconVariant: select('Ant icon variant', {
      Filled: 'Filled',
      Outlined: 'Outlined',
      TwoTone: 'TwoTone',
    }, 'Filled'),
    showFontAwesomeIcons: boolean('show FontAwesome icons', true),
  }
  const props = {
    highlight: boolean('highlight', false),
    spin: boolean('spin', false),
    rotate: number('rotate', 0),
    style: {
      fontSize: number('fontSize (px)', 36) + 'px',
      color: text('color', null),
    },
  }
  const iconSets = []
  if (filters.showAntIcons) {
    iconSets.push(antIconSets[filters.antIconVariant])
  }
  if (filters.showFontAwesomeIcons) {
    iconSets.push(FontAwesomeIcons)
  }
  const list = []
  // for (const iconSet of iconSets) {
  //   for (const [componentName, component] of Object.entries(iconSet)) {
  //     list.push((
  //       iconTile({
  //         componentName,
  //         component,
  //         props,
  //       })
  //     ))
  //   }
  // }
  return (
    <div className='ml-storybook-icon-list'>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      {list}
    </div>
  )
}
