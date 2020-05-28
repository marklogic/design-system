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
    <div className='timeline-story'>
      <MLTimeline>
        <MLTimeline.MLItem color='green'>
          <p className={'timeline-date-label'}>2015-09-01</p>
          <p>Create a services site</p>
        </MLTimeline.MLItem>
        <MLTimeline.MLItem color='green'>
          <p className={'timeline-date-label'}>2015-09-01</p>
          <p>Create a services site</p>
        </MLTimeline.MLItem>
        <MLTimeline.MLItem color='red'>
          <p className={'timeline-date-label'}>2015-09-01</p>
          <p>Solve initial network problems 1</p>
          <p>Solve initial network problems 2</p>
          <p>Solve initial network problems 3</p>
        </MLTimeline.MLItem>
        <MLTimeline.MLItem>
          <p className={'timeline-date-label'}>2015-09-01</p>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3</p>
        </MLTimeline.MLItem>
        <MLTimeline.MLItem color='gray'>
          <p className={'timeline-date-label'}>2015-09-01</p>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3</p>
        </MLTimeline.MLItem>
        <MLTimeline.MLItem color='gray'>
          <p className={'timeline-date-label'}>2015-09-01</p>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3</p>
        </MLTimeline.MLItem>
        <style>{`
.timeline-story .ml-timeline .ant-timeline-item-content {
  // margin-top: -5px;
}

.timeline-story .ant-timeline-item-content {
  position: relative;
  top: -12px;
}
.timeline-story .timeline-date-label {
  margin-bottom: -3px;
}
`}
        </style>
      </MLTimeline>
    </div>
  )
}
