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

MLHeaderTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any),
}

/**
 * Component for showing basic tables, nested tables, and entity properties for rows in said tables.
 */
class MLTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialColumnExpandedStates()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.columns !== this.props.columns) {
      // This rule is OK to ignore because of the above if statement.
      // But, consider using one of the alternatives here instead for new best practices:
      // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
      // eslint-disable-next-line react/no-did-update-set-state
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

    function restructureData(dataSource) {
      // TODO: Might restructure more things here; for now just wrap objects in arrays
      return (Array.isArray(dataSource) ? dataSource : [dataSource]).map((row) => {
        const restructuredRow = {}
        for (const [key, value] of Object.entries(row)) {
          restructuredRow[key] = value
        }
        return restructuredRow
      })
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
      />
    )
  }
}

MLTable.defaultProps = {
  size: 'middle',
  showBody: true,
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
  onChange: PropTypes.func,
}

export default MLTable
