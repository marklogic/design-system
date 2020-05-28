import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { MLTimeline } from '@marklogic/design-system'

export default {
  title: 'Data Display/MLTimeline',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  return (
    <MLTimeline>
      <MLTimeline.MLItem color='green'>Create a services site 2015-09-01</MLTimeline.MLItem>
      <MLTimeline.MLItem color='green'>Create a services site 2015-09-01</MLTimeline.MLItem>
      <MLTimeline.MLItem color='red'>
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </MLTimeline.MLItem>
      <MLTimeline.MLItem>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </MLTimeline.MLItem>
      <MLTimeline.MLItem color='gray'>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </MLTimeline.MLItem>
      <MLTimeline.MLItem color='gray'>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </MLTimeline.MLItem>
    </MLTimeline>
  )
}
