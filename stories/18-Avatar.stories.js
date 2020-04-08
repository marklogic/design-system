import React from 'react'
import { MLAvatar } from '@marklogic/design-system'
import { text, withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'MLAvatar',
}

export const basic = () => <MLAvatar />

export const withInitials = () => <MLAvatar>DHS</MLAvatar>
