import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLDropdown, MLMenu, MLButton, MLTooltip } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'
import { DownOutlined, UserOutlined } from '@marklogic/design-system/MLIcon'
import mdx from './15-Dropdown.mdx'

export default {
  title: 'Navigation/MLDropdown',
  decorators: [withKnobs],
  parameters: {
    fileName: '15-Dropdown.stories.jsx',
    docs: {
      page: mdx,
    },
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const menu = (
    <MLMenu>
      <MLMenu.MLItem key='0'>
        <a href='#'>1st menu item</a>
      </MLMenu.MLItem>
      <MLMenu.MLItem key='1'>
        <a href='#'>2nd menu item</a>
      </MLMenu.MLItem>
      <MLMenu.MLDivider />
      <MLMenu.MLItem key='3'>3rd menu item</MLMenu.MLItem>
    </MLMenu>
  )
  return (
    <MLDropdown overlay={menu}>
      <a className='ant-dropdown-link' onClick={e => e.preventDefault()}>
        Click me <DownOutlined />
      </a>
    </MLDropdown>
  )
}

export const buttonWithDropdownMenu = () => {
  const menu = (
    <MLMenu>
      <MLMenu.MLItem key='1'>
        <UserOutlined />
        1st menu item
      </MLMenu.MLItem>
      <MLMenu.MLItem key='2'>
        <UserOutlined />
        2nd menu item
      </MLMenu.MLItem>
      <MLMenu.MLItem key='3'>
        <UserOutlined />
        3rd item
      </MLMenu.MLItem>
    </MLMenu>
  )
  return (
    <div id='components-dropdown-demo-dropdown-button'>
      <MLDropdown.MLButton overlay={menu}>
        Dropdown
      </MLDropdown.MLButton>
      <MLDropdown.MLButton overlay={menu} icon={<UserOutlined style={{ color: 'black' }} />}>
        Dropdown
      </MLDropdown.MLButton>
      <MLDropdown.MLButton overlay={menu} disabled>
        Dropdown
      </MLDropdown.MLButton>
      <MLDropdown overlay={menu}>
        <MLButton>
          Button <DownOutlined />
        </MLButton>
      </MLDropdown>
      <style>{
`#components-dropdown-demo-dropdown-button .ant-dropdown-button {
  margin: 0 8px 8px 0;
}

#components-dropdown-demo-dropdown-button .ant-btn-group-rtl.ant-dropdown-button {
  margin: 0 0 8px 8px;
}`
      }
      </style>
    </div>
  )
}
