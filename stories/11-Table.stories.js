import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLTable, MLIcon } from '../src'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'
import { sampleBasicData, sampleNestedData } from './11-Table.sample-data.js'
import './11-Table.less'

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
    dataSource: sampleBasicData.dataSource,
    columns: sampleBasicData.columns,
  }
  return (<MLTable {...props} onChange={action('onChange')} />)
}

export const smartMastering = () => {
  const props = {
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

export const customBackgroundColors = () => {
  const dataSource = [
    {
      concept_id: 4148237,
      domain: 'drug',
      key: 1,
    },
    {
      concept_id: 4148238,
      domain: '',
      key: 2,
    },
    {
      concept_id: 4148239,
      domain: 'drug',
      key: 3,
    },
  ]
  const columns = [
    {
      title: 'concept_id',
      dataIndex: 'concept_id',
      key: 'concept_id',
    },
    {
      title: 'domain',
      dataIndex: 'domain',
      key: 'domain',
    },
  ]
  return (
    <MLTable
      className='custom-color-example'
      headerRowStyle={(column, colIndex) => ({
        background: 'blue',
      })}
      rowStyle={(record, rowIndex) => (rowIndex === 1 ? {
        background: 'red',
      } : {})}
      columnStyle={(column, colIndex) => {
        return {
          background: 'blue',
        }
      }}
      // onRow={(record, rowIndex) => {
      //   if (rowIndex === 1) {
      //     return {
      //       style: {
      //         backgroundColor: 'red',
      //       },
      //     }
      //   }
      // }}
      // onHeaderRow={(column, colIndex) => {
      //   return {
      //     style: {
      //       backgroundColor: 'blue',
      //     },
      //   }
      // }}
      // onColumn={(column, colIndex) => {
      //   return {
      //     style: {
      //       backgroundColor: 'blue',
      //     },
      //   }
      // }}
      dataSource={dataSource}
      columns={columns}
      expandable={{
        rowExpandable: () => true,
        expandedRowRender: () => 'Some expanded row content',
      }}
    />
  )
}
