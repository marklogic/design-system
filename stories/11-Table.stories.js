import React from 'react'
import { action } from '@storybook/addon-actions'
import MLTable, { MLEntityTypesTable } from '../src/ml-table'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'
import { sampleBasicData, sampleNestedData, sampleEntityTypesData } from './11-Table.sample-data.js'
import MLRadio from '../src/ml-radio'
import { Checkbox, Table } from 'antd'
import { DeleteOutlined, PlusSquareOutlined } from '@ant-design/icons'

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

export const nestedTables = () => {
  const props = {
    dataSource: sampleNestedData.dataSource,
    columns: sampleNestedData.columns,
  }
  // TODO: Handle onChange for nested tables, and figure out a way to differentiate the callback values
  return (<MLTable {...props} onChange={action('onChange')} />)
}

// export const entityTypes = () => {
//   const props = {
//     rowKey: 'name', // Probably want to use an id in real applications
//     defaultExpandAllRows: true,
//     dataSource: sampleEntityTypesData.dataSource,
//     entityDefinitions: {
//       Person: sampleEntityTypesData.entityDefinitions.Person,
//       Patients: sampleEntityTypesData.entityDefinitions.Patients,
//     },
//   }
//   return (<MLEntityTypesTable {...props} onChange={action('onChange')} />)
// }

const pureLessThanSorter = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0
const extractSortColumnDecorator = (sortFn) => (dataIndex) => (a, b) => sortFn(a[dataIndex], b[dataIndex])

const lessThanSorter = extractSortColumnDecorator(pureLessThanSorter)
const dateSorter = extractSortColumnDecorator((a, b) => {
  return pureLessThanSorter(new Date(a), new Date(b))
})

export function entityTable() {
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

  debugger;

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
        // render: (checked, record) => {
        // // TODO: This might depend on the table props for naming things within a table; consider moving columns to constructor
        //   if (record.hasSingularColumns) {
        //     // TODO: Figure out why the `name`s aren't making the Radios mutually exclusive
        //     return <MLRadio name={`${entityName}-identifier`} /* checked={checked} */ /> // TODO: Implement onChecked/onChanged/whatever
        //   }
        // },
      },
      {
        title: 'Multiple',
        dataIndex: 'multiple',
        key: 'multiple',
        sorter: lessThanSorter('multiple'),
        input: 'checkbox',
        showInput: () => true,
        // render: (checked, record) => (
        //   <Checkbox name={`${entityName}-multiple`} /* checked={checked} */ /> // TODO: Hook up onChanged
        // ),
      },
      {
        title: 'Indexed',
        dataIndex: 'indexed',
        key: 'indexed',
        sorter: lessThanSorter('indexed'),
        input: 'checkbox',
        showInput: (row) => row.hasSingularColumns,
        // render: (checked, record) => (
        //   <Checkbox name={`${entityName}-indexed`} /* checked={checked} */ /> // TODO: Hook up onChanged
        // ),
      },
      {
        title: 'Word Search',
        dataIndex: 'wordSearch',
        key: 'wordSearch',
        sorter: lessThanSorter('wordSearch'),
        input: 'checkbox',
        showInput: (row) => row.hasSingularColumns,
        // render: (checked, record) => {
        //   if (record.hasSingularColumns) {
        //     return <Checkbox name={`${entityName}-wordSearch`} /* checked={checked} */ /> // TODO: Hook up onChanged
        //   }
        // },
      },
      {
        title: 'PII',
        dataIndex: 'pii',
        key: 'pii',
        sorter: lessThanSorter('pii'),
        input: 'checkbox',
        showInput: () => true,
        // render: (checked, record) => {
        //   if (true) { // TODO: When is the PII box hidden?
        //     return <Checkbox name={`${entityName}-pii`} /* checked={checked} */ /> // TODO: Hook up onChanged
        //   }
        // },
      },
      {
        title: 'Delete',
        render: (foo, record) => {
          return <DeleteOutlined onClick={() => ('TODO')} /> // TODO: hook up onClick to top level props somehow
        },
      },
      {
        title: 'Add',
        dataIndex: 'add',
        key: 'add',
        render: (foo, record) => {
          if (true) { // TODO: When is Add button hidden?
            return <PlusSquareOutlined onClick={() => ('TODO')} /> // TODO: hook up onClick to top level props somehow
          }
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
