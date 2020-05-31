import React from 'react'
// import { action } from '@storybook/addon-actions'
// import { withKnobs, radios, boolean } from '@storybook/addon-knobs'
import {
import mdx from './2-Button.mdx'
  MLButton,
} from '@marklogic/design-system'

export const basic = (props) => {
  return (
    <MLButton {...props}>Foo</MLButton>
  )
}
basic.args = {
  type: 'primary',
}
basic.argTypes = {
  type: { control: { type: 'string' } },
}
