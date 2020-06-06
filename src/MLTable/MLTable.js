import React from 'react'
import PropTypes from 'prop-types'
import { Descriptions, Table } from 'antd'
import { clone, merge } from 'lodash-es'
import { DownOutlined, RightOutlined } from '../MLIcon'
import classNames from 'classnames'
import isFunction from 'lodash-es/isFunction'

/**
 * Component for showing an un-expanded nested table, which is just a vertical list of column headers.
 */
class MLHeaderTable extends React.Component {
  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.any),
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
  constructor(props) {
    super(props)
    this.state = Object.assign(
      this.getInitialColumnExpandedStates(),
      this.getInitialRowOrder(),
      {
        dragging: false,
        draggingRecordInfo: null,
        dropTargetRecordInfo: null,
      },
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.columns !== this.props.columns) {
      this.setState(Object.assign(
        this.getInitialColumnExpandedStates(),
      ))
    }
    if (prevProps.dataSource !== this.props.dataSource) {
      this.setState(Object.assign(
        this.getInitialRowOrder(),
      ))
    }
  }

  getInitialColumnExpandedStates() {
    return {
      columnExpandedStates: Object.fromEntries(this.props.columns.map((column) => (
        [column.dataIndex, false]
      ))),
    }
  }

  getInitialRowOrder() {
    return {
      rowOrder: this.props.dataSource.map((row) => (
        this.getRowKeyValue(row)
      )),
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

  handleDragEnterRow(draggingRecordInfo, dropTargetRecordInfo) {
    const newRowOrder = clone(this.state.rowOrder)
    const removedRow = newRowOrder.splice(draggingRecordInfo.rowIndex, 1)[0]
    if (draggingRecordInfo.rowIndex < dropTargetRecordInfo.rowIndex) {
      newRowOrder.splice(dropTargetRecordInfo.rowIndex, 0, removedRow)
    } else {
      newRowOrder.splice(dropTargetRecordInfo.rowIndex, 0, removedRow)
    }

    this.setState({
      dropTargetRecordInfo,
      tempRowOrder: newRowOrder,
    })
  }

  getRowKeyValue(row) {
    const { rowKey } = this.props
    return row[isFunction(rowKey) ? rowKey(row) : rowKey]
  }

  restructureData (dataSource) {
    // TODO: Might restructure more things here; for now just wrap objects in arrays
    const restructuredData = (Array.isArray(dataSource) ? dataSource : [dataSource]).map((row) => {
      const restructuredRow = {}
      for (const [key, value] of Object.entries(row)) {
        restructuredRow[key] = value
      }
      return restructuredRow
    })
    return restructuredData
  }

  reorderData (dataSource) {
    const rowOrder = this.state.tempRowOrder || this.state.rowOrder
    const reorderedData = []
    for (const row of dataSource) {
      const rowKeyValue = this.getRowKeyValue(row)
      reorderedData[rowOrder.indexOf(rowKeyValue)] = row
    }
    return reorderedData
  }

  emitChange() {
    this.props.onChange({
      rowOrder: this.state.rowOrder,
      data: this.reorderData(this.restructureData(this.props.dataSource)),
    })
  }

  render() {
    const { showBody, dataSource, columns } = this.props
    if (!showBody) {
      return <MLHeaderTable columns={columns} />
    }
    const restructuredColumns = columns.map((originalColumn) => {
      const restructuredColumn = clone(originalColumn)
      if (originalColumn.columns !== undefined) {
        if (originalColumn.dataIndex === undefined) {
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
            size={this.props.size}
          />
        )
      }
      return restructuredColumn
    })

    const restructuredData = this.reorderData(this.restructureData(dataSource))

    // Determine how to modify the expand icon based on children and nested tables
    const hasTreeData = restructuredData.some((row) => (row.children !== undefined))
    const hasNestedTables = (this.props.expandedRowRender !== undefined)

    const restructuredExpandIcon = ({ expanded, onExpand, record }) => {
      if (!hasTreeData && !hasNestedTables) {
        // No rows will have an icon, so don't add spacers
        return null
      }
      const showIcon = record.children || hasNestedTables
      return (
        <div
          style={{ cursor: showIcon ? 'pointer' : 'inherit', width: '20px', display: 'inline-block' }}
          // className='ant-table-row-expand-icon ant-table-row-expand-icon-spaced'
        >
          {!showIcon ? null : (
            expanded ? (
              <DownOutlined onClick={e => onExpand(record, e)} />
            ) : (
              <RightOutlined onClick={e => onExpand(record, e)} />
            )
          )}
        </div>)
    }

    return (
      <Table
        pagination={{ hideOnSinglePage: true }}
        {...this.props} // This is positioned here so the above props can be overwritten if desired
        expandIcon={restructuredExpandIcon}
        dataSource={restructuredData} // But force the dataSource and columns to be our modified versions
        columns={restructuredColumns}
        className={classNames('ml-table', this.props.className)}
        onRow={(record, rowIndex) => {
          const rowKeyValue = this.getRowKeyValue(record)
          const classNameArr = []
          console.log('this.state:', this, JSON.stringify(this.state))
          if (this.state.dragging && this.state.draggingRecordInfo && this.getRowKeyValue(this.state.draggingRecordInfo.record) === rowKeyValue) {
            classNameArr.push('ml-table-row-dragging')
            classNameArr.push('ml-table-row-drop-target')
          } else if (this.state.postDragStaleHoverCancel) {
            classNameArr.push('ml-table-row-drag-stale')
          }
          const rowHandlers = {
            className: classNames(classNameArr),
            draggable: true,
            // onDrag: (e) => console.log('onDrag', record.id),
            onDragEnd: (e) => {
              console.log('onDragEnd', record.id)
              this.setState({
                rowOrder: this.state.tempRowOrder || this.state.rowOrder,
                tempRowOrder: null,
                dragging: false,
                draggingRecordInfo: null,
                dropTargetRecordInfo: null,
              })
              this.emitChange()
            },
            onDragEnter: (e) => {
              e.preventDefault()
              console.log('onDragEnter', record.id)
              const draggingRecordInfo = this.state.draggingRecordInfo
              const dropTargetRecordInfo = { record, rowIndex }

              this.handleDragEnterRow(draggingRecordInfo, dropTargetRecordInfo)
            },
            // onDragExit: (e) => console.log('onDragExit', record.id),
            // onDragLeave: (e) => console.log('onDragLeave', record.id),
            onDragOver: (e) => {
              e.preventDefault() // Needed to prevent animating back to original position
              console.log('onDragOver', record.id)
            },
            onDragStart: (e) => {
              this.setState({
                dragging: true,
                postDragStaleHoverCancel: true,
                draggingRecordInfo: { record, rowIndex },
              })
              e.dataTransfer.setData('application/json', JSON.stringify({
                record: record,
                rowIndex: rowIndex,
              }))
            },
          }
          if (!this.state.dragging && this.state.postDragStaleHoverCancel) {
            rowHandlers.onMouseMove = (e) => {
              this.setState({
                postDragStaleHoverCancel: false,
              })
            }
          }
          return rowHandlers
        }}
      />
    )
  }
}

MLTable.propTypes = { // TODO: Include default Table props as well
  id: PropTypes.string,
  rowKey: PropTypes.string,
  showBody: PropTypes.bool,
  dataSource: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any), // Single item data sources are converted into arrays automatically (used in embedded table)
    PropTypes.arrayOf(PropTypes.any),
  ]),
  columns: PropTypes.arrayOf(PropTypes.any),
  /** Emits the current state of the Table state data:
   *  rowOrder: is the current order of rowKeys in the table
   *  data: is the reordered */
  onChange: PropTypes.func,
}

MLTable.defaultProps = {
  size: 'middle',
  showBody: true,
  onChange: () => {},
  rowKey: 'key',
}

export default MLTable
