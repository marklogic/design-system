import React from 'react'
import { Checkbox, Descriptions, Table } from 'antd' // TODO: Use MLCheckbox
import _ from 'lodash'
import './ml-table.css'
import { DeleteOutlined, PlusSquareOutlined } from '@ant-design/icons' // TODO: Use MLIcon.*
import MLRadio from './ml-radio'

/**
 * Component for showing an un-expanded nested table, which is just a vertical list of column headers.
 */
class MLHeaderTable extends React.Component {
  render() {
    const { columns } = this.props
    return (
      <Descriptions
        className='ml-header-table'
        bordered
        layout='horizontal'
        column={1}
      >
        {columns.map((column) => (
          <Descriptions.Item key={column.dataIndex} label={column.title} />
        ))}
      </Descriptions>
    )
  }
}

/**
 * Component for showing basic tables, nested tables, and entity properties for rows in said tables.
 */
class MLTable extends React.Component {
  static defaultProps = {
    showBody: true,
  }

  constructor(props) {
    super(props)
    this.state = {
      columnExpandedStates: Object.fromEntries(props.columns.map((column) => (
        [column.dataIndex, false]
      ))),
    }
  }

  toggleColumnExpanded(column) {
    const stateTransform = (prevState) => ({
      ...prevState,
      columnExpandedStates: {
        ...prevState.columnExpandedStates,
        [column.dataIndex]: !this.state.columnExpandedStates[column.dataIndex],
      },
    })
    this.setState(stateTransform)
  }

  render() {
    const { showBody, columns, dataSource } = this.props
    console.log(showBody)
    if (!showBody) {
      return <MLHeaderTable columns={columns} />
    }
    const restructuredColumns = columns.map((column) => {
      const restructuredColumn = _.cloneDeep(column)
      if (!_.isUndefined(column.columns)) {
        if (_.isUndefined(column.dataIndex)) {
          throw Error('dataIndex must be specified when nesting columns')
        }
        // If the column has sub-columns, add a toggle to the header
        restructuredColumn.onHeaderCell = (column) => {
          return {
            onClick: () => this.toggleColumnExpanded(column),
          }
        }
        // If the column has sub-columns, render a sub-table
        restructuredColumn.render = (text, record, index) => (
          <MLTable
            columns={column.columns}
            dataSource={record[column.dataIndex]}
            showBody={this.state.columnExpandedStates[column.dataIndex]}
          />
        )
      }
      return restructuredColumn
    })

    function restructureData(dataSource) {
      // TODO: Might restructure more things here; for now just wrap objects in arrays
      return (_.isArray(dataSource) ? dataSource : [dataSource]).map((row) => {
        const restructuredRow = {}
        for (const [key, value] of Object.entries(row)) {
          restructuredRow[key] = value
        }
        return restructuredRow
      })
    }

    const restructuredData = restructureData(dataSource)

    return (
      <Table
        className='ml-table'
        pagination={{ hideOnSinglePage: true }}
        {...this.props} // This is positioned here so the above props can be overwritten if desired
        dataSource={restructuredData} // But force the dataSource and columns to be our modified versions
        columns={restructuredColumns}
      >
        {this.props.children}
      </Table>
    )
  }
}

const pureLessThanSorter = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0
const extractSortColumnDecorator = (sortFn) => (dataIndex) => (a, b) => sortFn(a[dataIndex], b[dataIndex])

const lessThanSorter = extractSortColumnDecorator(pureLessThanSorter)
const dateSorter = extractSortColumnDecorator((a, b) => {
  return pureLessThanSorter(new Date(a), new Date(b))
})

export class MLEntityTypesTable extends React.Component {
  static columns = [
    { title: 'Name', dataIndex: 'name', key: 'name', sorter: lessThanSorter('name') },
    { title: 'Instances', dataIndex: 'instances', key: 'instances', sorter: lessThanSorter('instances') },
    { title: 'Last Harmonized', dataIndex: 'last_harmonized', key: 'last_harmonized', sorter: dateSorter('last_harmonized') },
    { title: 'Display', dataIndex: 'display', key: 'display', sorter: lessThanSorter('display') },
    { title: 'Delete' },
  ]

  render() {
    return (
      <Table
        {...this.props}
        rowKey='name'
        dataSource={this.props.dataSource}
        columns={MLEntityTypesTable.columns}
        expandable={{
          expandedRowRender: (record) => {
            return (
              <MLEntityTypeTable
                entityName={record.name} entityDefinition={this.props.entityDefinitions[record.name]}
              />
            )
          },
          rowExpandable: (record) => {
            return (this.props.entityDefinitions.hasOwnProperty(record.name))
          },
        }}
      />
    )
  }
}

export class MLEntityTypeTable extends React.Component {
  static defaultState = {
    dataSource: [],
  }

  constructor(props) {
    super(props)
    const thisEntityDefinition = props.entityDefinition.definitions[props.entityName]
    const dataSource = []
    for (const [propertyName, propertyMeta] of Object.entries(thisEntityDefinition.properties)) {
      dataSource.push({
        propertyMeta: propertyMeta,
        hasSingularColumns: !propertyMeta.hasOwnProperty('$ref') && propertyMeta.dataType !== 'array', // TODO: Confirm this logic, consider name change
        // TODO: Confirm all of these
        name: propertyName,
        type: propertyMeta.dataType, // TODO: Handle when this is another defined data type ($ref is only thing in propertyMeta)
        identifier: false, // TODO: Where is this sourced from?
        multiple: propertyMeta.dataType === 'array',
        indexed: _.includes(thisEntityDefinition.rangeIndex, propertyName),
        wordSearch: _.includes(thisEntityDefinition.wordLexicon, propertyName),
        pii: _.includes(thisEntityDefinition.pii, propertyName),
      })
    }
    this.state = {
      dataSource,
      thisEntityDefinition,
      columns: this.generateColumns(),
    }
  }

  generateColumns() {
    return [
      { title: 'Property Name', dataIndex: 'name', key: 'name', sorter: lessThanSorter('name') },
      { title: 'Type', dataIndex: 'type', key: 'type', sorter: lessThanSorter('type') },
      {
        title: 'Identifier',
        dataIndex: 'identifier',
        key: 'identifier',
        sorter: lessThanSorter('identifier'),
        render: (checked, record) => {
        // TODO: This might depend on the table props for naming things within a table; consider moving columns to constructor
          if (record.hasSingularColumns) {
            // TODO: Figure out why the `name`s aren't making the Radios mutually exclusive
            return <MLRadio name={`${this.props.entityName}-identifier`} /*checked={checked}*/ /> // TODO: Implement onChecked/onChanged/whatever
          }
        },
      },
      {
        title: 'Multiple',
        dataIndex: 'multiple',
        key: 'multiple',
        sorter: lessThanSorter('multiple'),
        render: (checked, record) => (
          <Checkbox name={`${this.props.entityName}-multiple`} /*checked={checked}*/ /> // TODO: Hook up onChanged
        ),
      },
      {
        title: 'Indexed',
        dataIndex: 'indexed',
        key: 'indexed',
        sorter: lessThanSorter('indexed'),
        render: (checked, record) => (
          <Checkbox name={`${this.props.entityName}-indexed`} /*checked={checked}*/ /> // TODO: Hook up onChanged
        ),
      },
      {
        title: 'Word Search',
        dataIndex: 'wordSearch',
        key: 'wordSearch',
        sorter: lessThanSorter('wordSearch'),
        render: (checked, record) => {
          if (record.hasSingularColumns) {
            return <Checkbox name={`${this.props.entityName}-wordSearch`} /*checked={checked}*/ /> // TODO: Hook up onChanged
          }
        },
      },
      {
        title: 'PII',
        dataIndex: 'pii',
        key: 'pii',
        sorter: lessThanSorter('pii'),
        render: (checked, record) => {
          if (true) { // TODO: When is the PII box hidden?
            return <Checkbox name={`${this.props.entityName}-pii`} /*checked={checked}*/ /> // TODO: Hook up onChanged
          }
        },
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

  render() {
    return (
      <Table
        {...this.props}
        rowKey='name'
        dataSource={this.state.dataSource}
        columns={this.state.columns}
      />
    )
  }
}

export default MLTable
