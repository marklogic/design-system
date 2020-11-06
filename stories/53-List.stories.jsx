import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, radios, boolean } from '@storybook/addon-knobs'
import { MLList, MLDivider, MLAvatar, MLCard } from '@marklogic/design-system'
import mdx from './53-List.mdx'

// TODO: Replace with ML version when it's merged
import {
  Typography as MLTypography,
} from 'antd'
const MLText = MLTypography.Text

export default {
  title: 'List',
  decorators: [withKnobs],
  parameters: {
    fileName: '53-List.stories.jsx',
    docs: {
      page: mdx,
    },
    info: {
      text: 'Note: See Ant documentation for details on the renderItem prop, which does not display properly here in the story source.',
    },
  },
}

export const basic = () => {
  const props = {
    size: radios('size', ['small', 'default', 'large'], 'default'),
    bordered: boolean('bordered', false),
  }
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]
  return (
    <div>
      <MLList
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        dataSource={data}
        {...props}
        renderItem={item => <MLList.MLItem>{item}</MLList.MLItem>}
      />
    </div>
  )
}

export const withMeta = () => {
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ]
  return (
    <MLList
      itemLayout='horizontal'
      dataSource={data}
      renderItem={item => (
        <MLList.MLItem>
          <MLList.MLItem.MLMeta
            avatar={<MLAvatar />}
            title={<a href='https://ant.design'>{item.title}</a>}
            description='Ant Design, a design language for background applications, is refined by Ant UED Team'
          />
        </MLList.MLItem>
      )}
    />
  )
}

export const grid = () => {
  const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ]
  return (
    <MLList
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={item => (
        <MLList.MLItem>
          <MLCard title={item.title}>Card content</MLCard>
        </MLList.MLItem>
      )}
    />
  )
}
