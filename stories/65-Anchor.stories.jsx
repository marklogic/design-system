import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'
import { MLAnchor } from '@marklogic/design-system'
// import mdx from './65-Anchor.mdx'

export default {
  title: 'Other/MLAnchor',
  decorators: [withKnobs],
  parameters: {
    // docs: { // TODO: Uncomment when documentation branch is merged
    //   page: mdx,
    // },
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
    affix: boolean('affix', true),
    offsetTop: number('offsetTop', 24),
    onClick: (e) => { e.preventDefault() },
  }
  return (
    <div>
      <div style={{ position: 'absolute', right: '50px' }}>
        <MLAnchor {...props}>
          <MLAnchor.MLLink href='#anchor-1' title='Link 1' />
          <MLAnchor.MLLink href='#anchor-2' title='Link 2' />
          <MLAnchor.MLLink href='#anchor-3' title='Link 3 with _target' target='_blank' />
          <MLAnchor.MLLink href='#anchor-4' title='Link 4'>
            <MLAnchor.MLLink href='#anchor-5' title='Link 5' />
            <MLAnchor.MLLink href='#anchor-6' title='Link 6' />
          </MLAnchor.MLLink>
          <MLAnchor.MLLink href='#anchor-7' title='Link 7' />
        </MLAnchor>
      </div>
      <div id='anchor-1'>anchor-1</div>
      <div id='anchor-2' style={{ height: '500px' }}>anchor-2</div>
      <div id='anchor-3' style={{ height: '500px' }}>anchor-3</div>
      <div id='anchor-4' style={{ height: '500px' }}>
        anchor-4
        <div id='anchor-5' style={{ height: '200px' }}>anchor-5</div>
        <div id='anchor-6' style={{ height: '200px' }}>anchor-6</div>
      </div>
      <div id='anchor-7' style={{ height: '500px' }}>anchor-7</div>
    </div>
  )
}
