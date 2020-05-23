import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs/react'
import { MLList, MLDivider } from '@marklogic/design-system'

// TODO: Replace with ML version when it's merged
import {
  Typography as MLTypography,
  Avatar as MLAvatar,
  Card as MLCard,
} from 'antd'
const MLText = MLTypography.Text

export default {
  title: 'Data Display/MLList',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Note: See Ant documentation for details on the renderItem prop, which does not display properly here in the story source.',
    },
  },
}

export const basic = () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]
  return (
    <div>
      <MLDivider orientation='left'>Default Size</MLDivider>
      <MLList
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (
          <MLList.MLItem>
            <MLText mark>[ITEM]</MLText> {item}
          </MLList.MLItem>
        )}
      />
      <MLDivider orientation='left'>Small Size</MLDivider>
      <MLList
        size='small'
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => <MLList.MLItem>{item}</MLList.MLItem>}
      />
      <MLDivider orientation='left'>Large Size</MLDivider>
      <MLList
        size='large'
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
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
