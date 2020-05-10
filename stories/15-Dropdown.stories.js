import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLDropdown, MLMenu } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'

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
        <a href='http://www.alipay.com/'>1st menu item</a>
      </MLMenu.MLItem>
      <MLMenu.MLItem key='1'>
        <a href='http://www.taobao.com/'>2nd menu item</a>
      </MLMenu.MLItem>
      <MLMenu.MLDivider />
      <MLMenu.MLItem key='3'>3rd menu item</MLMenu.MLItem>
    </MLMenu>
  )
  return (
    <MLDropdown overlay={menu} />
  )
}
