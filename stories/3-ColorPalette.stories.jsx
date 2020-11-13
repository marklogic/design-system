import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
// import 'antd/es/typography/style/index.less'
import { MLAlert, MLButton, MLTypography } from '@marklogic/design-system'
import { Card } from 'antd'
import './3-ColorPalette.less'
import mdx from './3-ColorPalette.mdx'

const MLCard = Card

export default {
  title: 'Color Pallete',
  decorators: [withKnobs],
  parameters: {
    fileName: '3-ColorPalette.stories.jsx',
    docs: {
      page: mdx,
    },
    info: {
      text: 'Component description goes here',
    },
  },
}

export const colorPalette = () => (
  <div className='color-palette-story'>
    <MLCard title='Component colors'>
      <div><MLButton type='highlight'>Highlight (?)</MLButton></div>
      <div><MLButton type='primary'>primary</MLButton></div>
      <div><MLButton type='default'>default (secondary)</MLButton></div>
      <div><MLButton type='ghost'>ghost</MLButton></div>
      <div><MLButton type='dashed'>dashed</MLButton></div>
      <div><MLButton type='danger'>danger</MLButton></div>
      <div><MLButton type='link'>link (Button component)</MLButton></div>
    </MLCard>
    <MLCard title='Text colors'>
      <div><MLTypography.MLText>Primary (try highlighting me)</MLTypography.MLText></div>
      <div><MLTypography.MLText type='secondary'>Secondary</MLTypography.MLText></div>
      <div><MLTypography.MLText mark>Mark</MLTypography.MLText></div>
      <div><MLTypography.MLText disabled>Disabled</MLTypography.MLText></div>
      <div><MLTypography.MLText code>Code</MLTypography.MLText></div>
      <div><a>Link (anchor tag)</a></div>
      <div><a className='link-color-hover-example'>(Hovered link)</a></div>
    </MLCard>
    <MLCard title='Alerts'>
      <MLAlert message='Success Text' type='success' />
      <MLAlert message='Warning Text' type='warning' />
      <MLAlert message='Error Text' type='error' />
      <MLAlert message='Info Text' type='info' />
    </MLCard>
    <MLCard title='Tiles'>
      TODO when Tile Header component is written.
    </MLCard>
    <MLCard title='Graphical colors'>
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
    </MLCard>
  </div>
)
