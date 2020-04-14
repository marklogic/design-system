import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLTable, MLIcon } from '../src'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'
import { sampleBasicData, sampleNestedData, sampleEntityTypesData } from './11-Table.sample-data.js'

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
      bordered
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
        bordered
      />
      <div style={{ marginTop: 20 }}>
        This is the contents of expandedRowRender, so the source shows up below (to work around the noRefCheck):
      </div>
      {expandedRowRender(dataSource[0])}
    </div>
  )
}


export function entityTableExample() {
  // constructor(props) {
  const entityName = 'Patients'
  const thisEntityDefinition = sampleEntityTypesData.entityDefinitions.Patients.definitions.Patients
  const dataSource = []
  for (const [propertyName, propertyMeta] of Object.entries(thisEntityDefinition.properties)) {
    dataSource.push({
      propertyMeta: propertyMeta,
      hasSingularColumns: !propertyMeta.hasOwnProperty('$ref') && propertyMeta.datatype !== 'array', // TODO: Confirm this logic, consider name change
      // TODO: Confirm all of these
      name: propertyName,
      type: propertyMeta.dataType, // TODO: Handle when this is another defined data type ($ref is only thing in propertyMeta)
      identifier: (propertyName === 'PatientID'), // TODO: Where is this sourced from?
      multiple: propertyMeta.dataType === 'array',
      indexed: _.includes(thisEntityDefinition.rangeIndex, propertyName),
      wordSearch: _.includes(thisEntityDefinition.wordLexicon, propertyName),
      pii: _.includes(thisEntityDefinition.pii, propertyName),
    })
  }

  function generateColumns() {
    return [
      { title: 'Property Name', dataIndex: 'name', key: 'name', sorter: lessThanSorter('name') },
      { title: 'Type', dataIndex: 'type', key: 'type', sorter: lessThanSorter('type') },
      {
        title: 'Identifier',
        dataIndex: 'identifier',
        key: 'identifier',
        sorter: lessThanSorter('identifier'),
        input: 'radio',
        showInput: (row) => row.hasSingularColumns,
      },
      {
        title: 'Multiple',
        dataIndex: 'multiple',
        key: 'multiple',
        sorter: lessThanSorter('multiple'),
        input: 'checkbox',
      },
      {
        title: 'Indexed',
        dataIndex: 'indexed',
        key: 'indexed',
        sorter: lessThanSorter('indexed'),
        input: 'checkbox',
        showInput: (row) => row.hasSingularColumns,
      },
      {
        title: 'Word Search',
        dataIndex: 'wordSearch',
        key: 'wordSearch',
        sorter: lessThanSorter('wordSearch'),
        input: 'checkbox',
        showInput: (row) => row.hasSingularColumns,
      },
      {
        title: 'PII',
        dataIndex: 'pii',
        key: 'pii',
        sorter: lessThanSorter('pii'),
        input: 'checkbox',
      },
      {
        title: 'Delete',
        render: (foo, record) => {
          return <MLIcon.DeleteOutlined onClick={() => ('TODO')} /> // TODO: hook up onClick to top level props somehow
        },
      },
      {
        title: 'Add',
        dataIndex: 'add',
        key: 'add',
        render: (foo, record) => {
          return <MLIcon.PlusSquareOutlined onClick={() => ('TODO')} /> // TODO: hook up onClick to top level props somehow
        },
      },
    ]
  }

  return (
    <MLTable
      id='table-patients'
      rowKey='name'
      dataSource={dataSource}
      columns={generateColumns()}
      onChange={action('onChange')}
    />
  )
}

