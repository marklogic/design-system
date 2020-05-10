import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLDropdown, MLMenu, MLButton, MLTooltip } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'
import { DownOutlined, UserOutlined } from '@marklogic/design-system/src/MLIcon'

export default {
  title: 'Navigation/MLDropdown',
  decorators: [withKnobs],
  parameters: {
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
        Hover me <DownOutlined />
      </a>
    </MLDropdown>
  )
}

export const buttonWithDropdownMenu = () => {
  const handleMenuClick = action('MLMenu onClick')
  const handleButtonClick = action('MLMenuButton onClick')
  const menu = (
    <MLMenu onClick={handleMenuClick}>
      <MLMenu.MLItem key='1' icon={<UserOutlined />}>
        1st menu item
      </MLMenu.MLItem>
      <MLMenu.MLItem key='2' icon={<UserOutlined />}>
        2nd menu item
      </MLMenu.MLItem>
      <MLMenu.MLItem key='3' icon={<UserOutlined />}>
        3rd item
      </MLMenu.MLItem>
    </MLMenu>
  )
  return (
    <div id='components-dropdown-demo-dropdown-button'>
      <MLDropdown.MLButton onClick={handleButtonClick} overlay={menu}>
        Dropdown
      </MLDropdown.MLButton>
      <MLDropdown.MLButton overlay={menu} icon={<UserOutlined />}>
        Dropdown
      </MLDropdown.MLButton>
      <MLDropdown.MLButton onClick={handleButtonClick} overlay={menu} disabled>
        Dropdown
      </MLDropdown.MLButton>
      <MLDropdown.MLButton
        overlay={menu}
        buttonsRender={([leftButton, rightButton]) => [
          <MLTooltip title='tooltip' key='leftButton'>
            {leftButton}
          </MLTooltip>,
          rightButton,
        ]}
      >
        With Tooltip
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
