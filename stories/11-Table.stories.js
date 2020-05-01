import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLTable, MLIcon } from 'marklogic-ui-library'
import { withKnobs, radios } from '@storybook/addon-knobs'
import _ from 'lodash'
import { sampleBasicData, sampleNestedData } from './11-Table.sample-data.js'
import { DownOutlined, RightOutlined } from 'marklogic-ui-library/ml-icon'

export default {
  title: 'Data Display/Table',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
    size: radios('size', ['default', 'middle', 'small'], 'small'),
    dataSource: sampleBasicData.dataSource,
    columns: sampleBasicData.columns,
  }
  return (<MLTable {...props} onChange={action('onChange')} />)
}

export const embeddedTables = () => {
  const props = {
    size: radios('size', ['default', 'middle', 'small'], 'small'),
    dataSource: sampleNestedData.dataSource,
    columns: sampleNestedData.columns,
  }
  // TODO: Handle onChange for nested tables, and figure out a way to differentiate the callback values
  return (<MLTable {...props} onChange={action('onChange')} />)
}

const pureLessThanSorter = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0
const extractSortColumnDecorator = (sortFn) => (dataIndex) => (a, b) => sortFn(a[dataIndex], b[dataIndex])

const lessThanSorter = extractSortColumnDecorator(pureLessThanSorter)
const dateSorter = extractSortColumnDecorator((a, b) => {
  return pureLessThanSorter(new Date(a), new Date(b))
})

export const rowNestedTable = () => {
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
      key={row.key}
      dataSource={row.subtableDataSource}
      columns={abColumns}
      showHeader={false}
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
  const expandable = {
    expandedRowRender,
    rowExpandable: () => true,
  }
  return (
    <div>
      <MLTable
        size={ radios('size', ['default', 'middle', 'small'], 'small')}
        dataSource={dataSource}
        columns={abColumns}
        expandable={expandable}
      />
      <div style={{ marginTop: 20 }}>
        This is the contents of expandedRowRender, so the source shows up below (to work around the noRefCheck):
      </div>
      {expandedRowRender(dataSource[0])}
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
        size={ radios('size', ['default', 'middle', 'small'], 'small')}
        dataSource={dataSource}
        columns={abColumns}
      />
    </div>
  )
}
