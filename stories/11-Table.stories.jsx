import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLTable, MLButton } from '@marklogic/design-system'
import { withKnobs, radios } from '@storybook/addon-knobs'
import { sampleBasicData, sampleNestedData } from './11-Table.sample-data.js'
import mdx from './11-Table.mdx'

export default {
  title: 'Data Display/MLTable',
  decorators: [withKnobs],
  parameters: {
    fileName: '11-Table.stories.jsx',
    docs: {
      page: mdx,
    },
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
    size: radios('size', ['default', 'middle', 'small'], 'middle'),
    dataSource: sampleBasicData.dataSource,
    columns: sampleBasicData.columns,
    rowKey: 'key',
  }
  return (
    <div>
      <MLTable {...props} onChange={action('onChange')} />
    </div>
  )
}

export const embeddedTables = () => {
  const props = {
    size: radios('size', ['default', 'middle', 'small'], 'middle'),
    dataSource: sampleNestedData.dataSource,
    columns: sampleNestedData.columns,
  }
  // TODO: Handle onChange for nested tables, and figure out a way to differentiate the callback values
  return (
    <div>
      <MLTable
        scroll={{ x: true }}
        {...props}
        onChange={action('onChange')}
      />
    </div>
  )
}

const pureLessThanSorter = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0
const extractSortColumnDecorator = (sortFn) => (dataIndex) => (a, b) => sortFn(a[dataIndex], b[dataIndex])

const lessThanSorter = extractSortColumnDecorator(pureLessThanSorter)
const dateSorter = extractSortColumnDecorator((a, b) => {
  return pureLessThanSorter(new Date(a), new Date(b))
})

export const rowNestedTable = () => {
  const size = radios('size', ['default', 'middle', 'small'], 'middle')
  const abColumns = [
    {
      title: 'A',
      dataIndex: 'a',
      key: 'a',
      sorter: lessThanSorter('a'),
    },
    {
      title: 'B',
      dataIndex: 'b',
      key: 'b',
      sorter: lessThanSorter('b'),
    },
  ]
  const expandedRowRender = (row) => (
    <MLTable
      scroll={{ x: true }}
      key={row.key}
      dataSource={row.subtableDataSource}
      columns={abColumns}
      showHeader={true}
      size={size}
    />
  )
  const dataSource = [
    {
      a: 'Thing 1',
      b: 'Extra data',
      key: 1,
      subtableDataSource: [
        { a: 'Subtable Thing 1', b: 'Subtable extra data' },
        { a: 'Subtable Thing 2', b: 'Subtable extra data' },
      ],
    },
    {
      a: 'Thing 2',
      b: 'Extra data',
      key: 2,
      subtableDataSource: [
        { a: 'Subtable Thing 1', b: 'Subtable extra data' },
        { a: 'Subtable Thing 2', b: 'Subtable extra data' },
      ],
    },
  ]
  return (
    <div>
      <MLTable
        scroll={{ x: true }}
        size={size}
        dataSource={dataSource}
        columns={abColumns}
        expandedRowRender={expandedRowRender}
      />
      <div style={{ display: 'none' }}>
        Below is the contents of the expandedRowRender prop function that is
        displayed above as just "noRefCheck". To implement this, provide a
        function that returns a value like the below, for the expandedRowRender prop.
        {expandedRowRender(dataSource[0])}
      </div>
    </div>
  )
}

export const rowNestedTableWithButtons = () => {
  const size = radios('size', ['default', 'middle', 'small'], 'middle')
  const abColumns = [
    {
      title: 'A',
      dataIndex: 'a',
      key: 'a',
      sorter: lessThanSorter('a'),
    },
    {
      title: 'B',
      dataIndex: 'b',
      key: 'b',
      sorter: lessThanSorter('b'),
    },
  ]
  const expandedRowRender = (row) => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <MLButton>Example Button</MLButton>
      </div>
      <MLTable
        scroll={{ x: true }}
        key={row.key}
        dataSource={row.subtableDataSource}
        columns={abColumns}
        showHeader={true}
        size={size}
      />
    </div>
  )
  const dataSource = [
    {
      a: 'Thing 1',
      b: 'Extra data',
      key: 1,
      subtableDataSource: [
        { a: 'Subtable Thing 1', b: 'Subtable extra data' },
        { a: 'Subtable Thing 2', b: 'Subtable extra data' },
      ],
    },
    {
      a: 'Thing 2',
      b: 'Extra data',
      key: 2,
      subtableDataSource: [
        { a: 'Subtable Thing 1', b: 'Subtable extra data' },
        { a: 'Subtable Thing 2', b: 'Subtable extra data' },
      ],
    },
  ]
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <MLButton>Example Button</MLButton>
      </div>
      <MLTable
        scroll={{ x: true }}
        size={size}
        dataSource={dataSource}
        columns={abColumns}
        expandedRowRender={expandedRowRender}
      />
      <div style={{ display: 'none' }}>
        Below is the contents of the expandedRowRender prop function that is
        displayed above as just "noRefCheck". To implement this, provide a
        function that returns a value like the below, for the expandedRowRender prop.
        {expandedRowRender(dataSource[0])}
      </div>

    </div>
  )
}

export const treeData = () => {
  const abColumns = [
    {
      title: 'A',
      dataIndex: 'a',
      key: 'a',
      sorter: lessThanSorter('a'),
    },
    {
      title: 'B',
      dataIndex: 'b',
      key: 'b',
      sorter: lessThanSorter('b'),
    },
  ]
  const dataSource = [
    { key: 1, a: 1, b: 1 },
    {
      key: 2,
      a: 2,
      b: 2,
      children: [
        {
          key: 3,
          a: 3,
          b: 3,
          children: [
            { key: 4, a: 4, b: 4 },
            { key: 5, a: 5, b: 5 },
          ],
        },
        { key: 6, a: 6, b: 6 },
      ],
    },
    { key: 7, a: 7, b: 7 },
  ]
  return (
    <div>
      <MLTable
        scroll={{ x: true }}
        size={radios('size', ['default', 'middle', 'small'], 'middle')}
        dataSource={dataSource}
        columns={abColumns}
      />
    </div>
  )
}
