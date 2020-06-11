import React from 'react'
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs'
import { MLIcon } from '@marklogic/design-system'
import * as AntIcons from '@marklogic/design-system/es/MLIcon/ant-icons'
import * as FontAwesomeSolidIcons from '@marklogic/design-system/es/MLIcon/font-awesome-solid-icons'
import * as FontAwesomeRegularIcons from '@marklogic/design-system/es/MLIcon/font-awesome-regular-icons'
import * as FontAwesomeBrandIcons from '@marklogic/design-system/es/MLIcon/font-awesome-brand-icons'
import './19-Icon.css'
import { endsWith } from 'lodash-es'
import mdx from './19-Icon.mdx'
import { antIconVariants, faIconVariants } from '../src/MLIcon/MLIcon'
import reduce from 'lodash-es/reduce'

export default {
  title: 'General/MLIcon',
  decorators: [withKnobs],
  parameters: {
    fileName: '19-Icon.stories.jsx',
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
        &lt;{componentName}&nbsp;/&gt;
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
      color: text('color', ''),
    },
  }
  const component = AntIcons.CheckCircleFilled
  return (
    <div>
      {iconTile({
        component,
        props,
      })}
    </div>
  )
}

const antIconSets = {}
for (const variant of antIconVariants) {
  antIconSets[variant] = {}
  for (const [key, value] of Object.entries(AntIcons)) {
    if (endsWith(key, variant)) {
      antIconSets[variant][key] = value
    }
  }
}

const faIconSetEntries = reduce(
  [FontAwesomeRegularIcons, FontAwesomeSolidIcons, FontAwesomeBrandIcons],
  (acc, obj) => {
    return acc.concat(Object.entries(obj))
  }, [],
)

const faIconSets = {}
for (const variant of faIconVariants) {
  faIconSets[variant] = {}

  for (const [key, value] of faIconSetEntries) {
    if (endsWith(key, variant)) {
      faIconSets[variant][key] = value
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
      {iconTile({ component: MLIcon.UserOutlined, props })}
      {iconTile({ component: MLIcon.QuestionCircleOutlined, props })}
      {iconTile({ component: MLIcon.SearchOutlined, props })}
      {iconTile({ component: MLIcon.SettingOutlined, props })}
      {iconTile({ component: MLIcon.DashboardOutlined, props })}
      {iconTile({ component: MLIcon.RouteSolid, props })}
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
      {iconTile({ component: MLIcon.BookSolid, props })}
    </div>
  )
}

export const allAntIcons = () => {
  const filters = {
    antIconVariant: select('Ant icon variant', antIconVariants, 'Filled'),
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
  const iconSet = antIconSets[filters.antIconVariant]
  const list = []
  for (const [componentName, component] of Object.entries(iconSet)) {
    list.push((
      iconTile({
        componentName,
        component,
        props,
      })
    ))
  }
  return (
    <div className='ml-storybook-icon-list'>
      {list}
    </div>
  )
}

export const allFontAwesomeIcons = () => {
  const filters = {
    faIconVariant: select('FontAwesome icon variant', faIconVariants, 'Regular'),
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
  const iconSet = faIconSets[filters.faIconVariant]
  const list = []
  for (const [componentName, component] of Object.entries(iconSet)) {
    list.push((
      iconTile({
        componentName,
        component,
        props,
      })
    ))
  }
  return (
    <div className='ml-storybook-icon-list'>
      {list}
    </div>
  )
}
