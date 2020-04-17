import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
// import 'antd/es/typography/style/index.less'
// import 'marklogic-ui-library/styles.less' // TODO: Remove once we have MLTypography
import { MLAlert, MLButton } from 'marklogic-ui-library'
import { Card, Typography } from 'antd'
import './3-ColorPalette.less'

export default {
  title: 'Styles',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const colorPalette = () => (
  <div className='color-palette-story'>
    <Card title='Component colors'>
      <div><MLButton type='highlight'>Highlight (?)</MLButton></div>
      <div><MLButton type='primary'>primary</MLButton></div>
      <div><MLButton type='default'>default (secondary)</MLButton></div>
      <div><MLButton type='ghost'>ghost</MLButton></div>
      <div><MLButton type='dashed'>dashed</MLButton></div>
      <div><MLButton type='danger'>danger</MLButton></div>
      <div><MLButton type='link'>link (Button component)</MLButton></div>
    </Card>
    <Card title='Text colors'>
      <div><Typography.Text>Primary (try highlighting me)</Typography.Text></div>
      <div><Typography.Text type='secondary'>Secondary</Typography.Text></div>
      <div><Typography.Text mark>Mark</Typography.Text></div>
      <div><Typography.Text disabled>Disabled</Typography.Text></div>
      <div><Typography.Text code>Code</Typography.Text></div>
      <div><a>Link (anchor tag)</a></div>
      <div><a className='link-color-hover-example'>(Hovered link)</a></div>
    </Card>
    <Card title='Alerts'>
      <MLAlert message='Success Text' type='success' />
      <MLAlert message='Warning Text' type='warning' />
      <MLAlert message='Error Text' type='error' />
      <MLAlert message='Info Text' type='info' />
    </Card>
    <Card title='Tiles'>
      TODO when Tile Header component is written.
    </Card>
    <Card title='Graphical colors'>
      <div className='node-1-color'>node-1</div>
      <div className='node-2-color'>node-2</div>
      <div className='node-3-color'>node-3</div>
      <div className='node-4-color'>node-4</div>
      <div className='node-5-color'>node-5</div>
      <div className='node-6-color'>node-6</div>
      <div className='node-7-color'>node-7</div>
      <div className='node-8-color'>node-8</div>
      <div className='node-9-color'>node-9</div>
      <div className='node-10-color'>node-10</div>
      <div className='node-11-color'>node-11</div>
      <div className='node-12-color'>node-12</div>
      <div className='node-13-color'>node-13</div>
      <div className='node-14-color'>node-14</div>
      <div className='node-15-color'>node-15</div>
      <div className='node-16-color'>node-16</div>
      <div className='node-17-color'>node-17</div>
      <div className='node-18-color'>node-18</div>
      <div className='node-19-color'>node-19</div>
      <div className='node-20-color'>node-20</div>
    </Card>
  </div>
)
