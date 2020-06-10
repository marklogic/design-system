import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { MLStatistic, MLRow, MLCol } from '@marklogic/design-system'
import { LikeOutlined } from '@marklogic/design-system/MLIcon'

export default {
  title: 'Data Display/MLStatistic',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  return (
    <MLRow gutter={16}>
      <MLCol span={12}>
        <MLStatistic title='Active Users' value={112893} />
      </MLCol>
      <MLCol span={12}>
        <MLStatistic title='Account Balance (CNY)' value={112893} precision={2} />
      </MLCol>
    </MLRow>
  )
}

export const units = () => {
  return (
    <MLRow gutter={16}>
      <MLCol span={12}>
        <MLStatistic title='Feedback' value={1128} prefix={<LikeOutlined />} />
      </MLCol>
      <MLCol span={12}>
        <MLStatistic title='Unmerged' value={93} suffix='/ 100' />
      </MLCol>
    </MLRow>
  )
}

export const countdown = () => {
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 5 // Moment is also OK

  return (
    <MLRow gutter={16}>
      <MLCol span={12}>
        <MLStatistic.MLCountdown title='Countdown' value={deadline} onFinish={action('onFinish')} />
      </MLCol>
      <MLCol span={12}>
        <MLStatistic.MLCountdown title='Million Seconds' value={deadline} format='HH:mm:ss:SSS' />
      </MLCol>
      <MLCol span={24} style={{ marginTop: 32 }}>
        <MLStatistic.MLCountdown title='Day Level' value={deadline} format='D [Days] H [Hours] m [Min] s [Sec]' />
      </MLCol>
    </MLRow>
  )
}
