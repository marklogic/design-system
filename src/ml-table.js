import React from 'react'
import { Descriptions, Table } from 'antd'
import _ from 'lodash'
import './ml-table.css'

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
        {...this.props}
        dataSource={restructuredData}
        columns={restructuredColumns}
      >
        {this.props.children}
      </Table>
    )
  }
}

export default MLTable
