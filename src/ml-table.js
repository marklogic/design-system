import React from 'react'
import PropTypes from 'prop-types'
import { Descriptions, Table } from 'antd'
import { cloneDeep, isUndefined, isArray, merge } from 'lodash-es'
import './ml-table.css'
import { DownOutlined, RightOutlined } from './ml-icon'

/**
 * Component for showing an un-expanded nested table, which is just a vertical list of column headers.
 */
class MLHeaderTable extends React.Component {
  static propTypes = {
    columns: PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.oneOf([PropTypes.string, PropTypes.func]),
      ),
    ),
  }

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
  static propTypes = { // TODO: Include default Table props as well
    id: PropTypes.string,
    rowKey: PropTypes.string,
    showBody: PropTypes.bool,
    dataSource: PropTypes.objectOf(PropTypes.oneOf([PropTypes.string, PropTypes.number, PropTypes.bool])),
    columns: PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.oneOf([PropTypes.string, PropTypes.func]),
      ),
    ),
    onChange: PropTypes.func,
  }

  static defaultProps = {
    showBody: true,
  }

  constructor(props) {
    if (props.expandable && !props.expandable.expandIcon) {
      props.expandable.expandIcon = ({ expanded, onExpand, record }) => (
        expanded ? (
          <DownOutlined onClick={e => onExpand(record, e)} />
        ) : (
          <RightOutlined onClick={e => onExpand(record, e)} />
        )
      )
    }
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
    const { showBody, dataSource, columns } = this.props
    console.log(showBody)
    if (!showBody) {
      return <MLHeaderTable columns={columns} />
    }
    const restructuredColumns = columns.map((originalColumn) => {
      const restructuredColumn = cloneDeep(originalColumn)
      if (!isUndefined(originalColumn.columns)) {
        if (isUndefined(originalColumn.dataIndex)) {
          throw Error('dataIndex must be specified when nesting columns')
        }
        // If the column has sub-columns, add a toggle to the header
        restructuredColumn.onHeaderCell = (column) => {
          const originalOnHeaderCell = (originalColumn.onHeaderCell && originalColumn.onHeaderCell(originalColumn)) || {}
          // noinspection JSValidateTypes
          return merge(
            {
              style: { cursor: 'pointer' },
              onClick: () => this.toggleColumnExpanded(column),
            },
            originalOnHeaderCell,
          )
        }
        // If the column has sub-columns, render a sub-table
        restructuredColumn.render = (text, record, index) => (
          <MLTable
            columns={originalColumn.columns}
            dataSource={record[originalColumn.dataIndex]}
            showBody={this.state.columnExpandedStates[originalColumn.dataIndex]}
          />
        )
      }
      return restructuredColumn
    })

    function restructureData(dataSource) {
      // TODO: Might restructure more things here; for now just wrap objects in arrays
      return (isArray(dataSource) ? dataSource : [dataSource]).map((row) => {
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
      />
    )
  }
}

export default MLTable
