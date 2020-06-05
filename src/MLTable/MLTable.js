import React from 'react'
import PropTypes from 'prop-types'
import { Descriptions, Table } from 'antd'
import { clone, merge } from 'lodash-es'
import { DownOutlined, RightOutlined } from '../MLIcon'
import classNames from 'classnames'

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
  static propTypes = { // TODO: Include default Table props as well
    id: PropTypes.string,
    rowKey: PropTypes.string,
    showBody: PropTypes.bool,
    dataSource: PropTypes.oneOfType([
      PropTypes.objectOf(PropTypes.any), // Single item data sources are converted into arrays automatically (used in embedded table)
      PropTypes.arrayOf(PropTypes.any),
    ]),
    columns: PropTypes.arrayOf(PropTypes.any),
    onChange: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = Object.assign(
      this.getInitialColumnExpandedStates(),
      {
        draggingRecordInfo: null,
        dropTargetRecordInfo: null,
      },
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.columns !== this.props.columns) {
      this.setState(this.getInitialColumnExpandedStates())
    }
  }

  getInitialColumnExpandedStates() {
    return {
      columnExpandedStates: Object.fromEntries(this.props.columns.map((column) => (
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

  handleDragEnterRow(draggingRecordInfo, dropTargetRecordInfo) {
    console.log(draggingRecordInfo, dropTargetRecordInfo)
    this.setState({
      dropTargetRecordInfo,
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

    const restructureData = (dataSource) => {
      // TODO: Might restructure more things here; for now just wrap objects in arrays
      const restructuredData = (Array.isArray(dataSource) ? dataSource : [dataSource]).map((row) => {
        const restructuredRow = {}
        for (const [key, value] of Object.entries(row)) {
          restructuredRow[key] = value
        }
        return restructuredRow
      })
      if (this.state.draggingRecordInfo && this.state.dropTargetRecordInfo) {
        const removedRow = restructuredData.splice(this.state.draggingRecordInfo.rowIndex, 1)[0]
        if (this.state.draggingRecordInfo.rowIndex < this.state.dropTargetRecordInfo.rowIndex) {
          restructuredData.splice(this.state.dropTargetRecordInfo.rowIndex, 0, removedRow)
        } else {
          restructuredData.splice(this.state.dropTargetRecordInfo.rowIndex, 0, removedRow)
        }
      }
      return restructuredData
    }

    const restructuredData = restructureData(dataSource)

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
          const classNameArr = []
          console.log('this.state:', this, JSON.stringify(this.state))
          if (this.state.draggingRecordInfo && this.state.draggingRecordInfo.rowIndex === rowIndex) {
            classNameArr.push('ml-table-row-dragging')
          }
          if (this.state.dropTargetRecordInfo && this.state.dropTargetRecordInfo.rowIndex === rowIndex) {
            classNameArr.push('ml-table-row-drop-target')
          }
          return {
            className: classNames(classNameArr),
            draggable: true,
            onDrag: () => console.log('onDrag', record.id),
            onDragEnd: () => {
              console.log('onDragEnd', record.id)
              this.setState({
                draggingRecordInfo: null,
                dropTargetRecordInfo: null,
              })
            },
            onDragEnter: (e) => {
              console.log('onDragEnter', record.id)
              const draggingRecordInfo = this.state.draggingRecordInfo
              const dropTargetRecordInfo = { record, rowIndex }
              this.handleDragEnterRow(draggingRecordInfo, dropTargetRecordInfo)
            },
            onDragExit: () => console.log('onDragExit', record.id),
            onDragLeave: () => console.log('onDragLeave', record.id),
            onDragOver: () => console.log('onDragOver', record.id),
            onDragStart: (e) => {
              this.setState({
                draggingRecordInfo: { record, rowIndex },
              })
              console.log('onDragStart', record.id)
              e.dataTransfer.setData('application/json', JSON.stringify({
                record: record,
                rowIndex: rowIndex,
              }))
              console.log(e.dataTransfer.getData('application/json'))
            },
            onDrop: () => console.log('onDrop', record.id),
          }
        }}
      />
    )
  }
}

MLTable.propTypes = { // TODO: Include default Table props as well
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

MLTable.defaultProps = {
  size: 'middle',
  showBody: true,
}

export default MLTable
