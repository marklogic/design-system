import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLMenu } from '@marklogic/design-system'
import { withKnobs, radios } from '@storybook/addon-knobs'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@marklogic/design-system/src/MLIcon'

export default {
  title: 'Navigation/MLMenu',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const theme = radios('theme', ['light', 'dark'], 'light')
  const props = {
    theme,
    mode: radios('mode', ['vertical', 'horizontal', 'inline'], 'vertical'),
  }
  return (
    <MLMenu
      style={{ width: (props.mode === 'horizontal' ? undefined : 256) }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      {...props}
    >
      <MLMenu.MLSubMenu
        key='sub1'
        title={
          <span>
            <MailOutlined />
            <span>Navigation One</span>
          </span>
        }
      >
        <MLMenu.MLItemGroup key='g1' title='Item 1'>
          <MLMenu.MLItem key='1'>Option 1</MLMenu.MLItem>
          <MLMenu.MLItem key='2'>Option 2</MLMenu.MLItem>
        </MLMenu.MLItemGroup>
        <MLMenu.MLItemGroup key='g2' title='Item 2'>
          <MLMenu.MLItem key='3'>Option 3</MLMenu.MLItem>
          <MLMenu.MLItem key='4'>Option 4</MLMenu.MLItem>
        </MLMenu.MLItemGroup>
      </MLMenu.MLSubMenu>
      <MLMenu.MLSubMenu
        key='sub2'
        title={
          <span>
            <AppstoreOutlined />
            <span>Navigation Two</span>
          </span>
        }
      >
        <MLMenu.MLItem key='5'>Option 5</MLMenu.MLItem>
        <MLMenu.MLItem key='6'>Option 6</MLMenu.MLItem>
        <MLMenu.MLSubMenu key='sub3' title='Submenu'>
          <MLMenu.MLItem key='7'>Option 7</MLMenu.MLItem>
          <MLMenu.MLItem key='8'>Option 8</MLMenu.MLItem>
        </MLMenu.MLSubMenu>
      </MLMenu.MLSubMenu>
      <MLMenu.MLSubMenu
        key='sub4'
        title={
          <span>
            <SettingOutlined />
            <span>Navigation Three</span>
          </span>
        }
      >
        <MLMenu.MLItem key='9'>Option 9</MLMenu.MLItem>
        <MLMenu.MLItem key='10'>Option 10</MLMenu.MLItem>
        <MLMenu.MLItem key='11'>Option 11</MLMenu.MLItem>
        <MLMenu.MLItem key='12'>Option 12</MLMenu.MLItem>
      </MLMenu.MLSubMenu>
    </MLMenu>
  )
}
