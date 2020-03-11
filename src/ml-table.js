import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, Table } from 'antd'
import _ from 'lodash'
import './ml-table.css'

const MLTable = (props) => {
  const { columns, dataSource } = props
  const restructuredColumns = columns.map((column) => {
    const restructuredColumn = _.cloneDeep(column)
    if (!_.isUndefined(column.columns)) {
      if (_.isUndefined(column.dataIndex)) {
        throw Error('dataIndex must be specified when nesting columns')
      }
      restructuredColumn.render = (text, record, index) => {
        return <MLTable columns={column.columns} dataSource={record[column.dataIndex]} />
      }
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
      {...props}
      dataSource={restructuredData}
      columns={restructuredColumns}
    >
      {props.children}
    </Table>
  )
}

export default MLTable
