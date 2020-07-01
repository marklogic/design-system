import React from 'react'
import { Props } from '@storybook/addon-docs/blocks'

const PropsPanels = ({ of }) => (
  <>
    <hr />
    {of.map((component) => (
      <>
        <h2>{component.displayName} props:</h2>
        Note: This may not contain all props available in the Ant component, which can also be used.
        <Props of={component} />
      </>
    ))}
  </>
)

export default PropsPanels
