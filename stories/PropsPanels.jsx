import React from 'react'
import { Props } from '@storybook/addon-docs/blocks'

const PropsPanels = ({ of }) => (
  <>
    {of.map((component) => (
      <>
        <h2>{component.displayName} props:</h2>
        <Props of={component} />
      </>
    ))}
  </>
)

export default PropsPanels
