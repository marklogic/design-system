import React from 'react'
import PropTypes from 'prop-types'
import { Descriptions, Table } from 'antd'
import _ from 'lodash'
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
    columnStyle: () => ({}),
    headerRowStyle: () => ({}),
    onHeaderRow: () => ({}),
    rowStyle: () => ({}),
    onRow: () => ({}),
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
    const {
      showBody,
      dataSource,
      columns,
      columnStyle,
    } = this.props

    if (!showBody) {
      return <MLHeaderTable columns={columns} />
    }
    const restructuredColumns = columns.map((column) => {
      const restructuredColumn = _.cloneDeep(column)
      restructuredColumn.render = restructuredColumn.render || ((text, record, index) => {
        return text
      })
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
      const originalRender = restructuredColumn.render
      restructuredColumn.render = (text, record, index) => (
        <div style={this.props.columnStyle(record, index)}>
          {originalRender(text, record, index)}
        </div>
      )
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

    const {
      headerRowStyle,
      onHeaderRow,
      rowStyle,
      onRow,
    } = this.props

    return (
      <Table
        pagination={{ hideOnSinglePage: true }}
        {...this.props} // This is positioned here so the above props can be overwritten if desired
        className={['ml-table', this.props.className].join(' ')}
        dataSource={restructuredData} // But force the dataSource and columns to be our modified versions
        columns={restructuredColumns}
        onHeaderRow={(column, colIndex) => {
          // User can overwrite header style with headerRowStyle, or other props with onHeaderRow
          const originalOnHeaderRow = onHeaderRow(column, colIndex)
          return Object.assign(
            {
              style: Object.assign(
                {},
                // { background: '#e8e8e8' },
                headerRowStyle(column, colIndex),
              ),
            },
            originalOnHeaderRow,
          )
        }}
        onRow={(record, rowIndex) => {
          // User can overwrite row style with rowStyle, or other props with onHeaderRow
          const originalOnRow = onRow(record, rowIndex)
          return Object.assign(
            {
              style: Object.assign(
                // { background: '#e8e8e8' },
                rowStyle(record, rowIndex),
              ),
            },
            originalOnRow,
          )
        }}
      />
    )
  }
}

export default MLTable
