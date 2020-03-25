import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Descriptions, Table } from 'antd' // TODO: Use MLCheckbox
import _ from 'lodash'
import './ml-table.css'
import MLRadio from './ml-radio'
const MLCheckbox = Checkbox // TODO: Use real MLCheckbox

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
    super(props)
    this.state = {
      columnExpandedStates: Object.fromEntries(props.columns.map((column) => (
        [column.dataIndex, false]
      ))),
      columnInputValues: Object.fromEntries(props.columns.map(
        (column) => {
          if (column.input === 'radio') {
            const checkedInputRows = props.dataSource.filter((row) => {
              return !!row[column.dataIndex] && (!column.showInput || column.showInput(row))
            })
            if (checkedInputRows.length > 0) {
              return [this.inputNameForColumn(column), checkedInputRows[0][props.rowKey]]
            } else {
              return [this.inputNameForColumn(column), null]
            }
          } else if (column.input === 'checkbox') {
            const checkedInputRows = props.dataSource.filter((row) => {
              return !!row[column.dataIndex] && (!column.showInput || column.showInput(row))
            })
            console.log('checkedInputRows:', checkedInputRows)
            if (checkedInputRows.length > 0) {
              return [this.inputNameForColumn(column), checkedInputRows.map((r) => r[props.rowKey])]
            } else {
              return [this.inputNameForColumn(column), []]
            }
          } else {
            return undefined
          }
        },
      ).filter(v => v)),
      // TODO: Do this mapping somewhere that will get updated if the props change
      columns: props.columns.map((column) => {
        const rewrittenColumn = Object.assign({}, column)
        if (column.showInput) {
          Object.assign(rewrittenColumn, {
            render: (value, row, index) => {
              const InputComponentType = ({
                radio: MLRadio,
                checkbox: MLCheckbox,
              })[column.input]
              if (!InputComponentType) {
                throw TypeError(`Unknown input type "${column.input}"`)
              }
              const originalColumnRenderedValue = column.render ? column.render() : null
              if (column.showInput(row)) {
                const rowValue = row[props.rowKey]
                const currentValue = this.state.columnInputValues[this.inputNameForColumn(column)]
                const currentValueAsArray = Array.isArray(currentValue) ? currentValue : [currentValue]
                return (
                  <InputComponentType
                    name={this.inputNameForColumn(column)}
                    value={rowValue} // TODO: Consider allowing the user of MLTable to specify the value-key here
                    onChange={(e) => this.handleColumnInputChange(e)}
                    checked={currentValueAsArray.includes(rowValue)}
                  >
                    {originalColumnRenderedValue}
                  </InputComponentType>
                )
              } else {
                return originalColumnRenderedValue
              }
            },
          })
        }
        return rewrittenColumn
      }),
    }
  }

  inputNameForColumn(column) {
    // return `${this.props.id}-${column.dataIndex}`
    return column.dataIndex
  }

  handleColumnInputChange(event) {
    let newValue
    if (event.target.type === 'checkbox') {
      const columnInputValue = this.state.columnInputValues[event.target.name]
      if (event.target.checked) {
        newValue = [...new Set([...columnInputValue, event.target.value])]
      } else {
        newValue = columnInputValue.filter((v) => v !== event.target.value)
      }
    } else if (event.target.type === 'radio') {
      newValue = event.target.value
    } else {
      throw TypeError(`Tried to handle table input change for unknown input type "${event.target.type}"`)
    }
    const newState = {
      ...this.state,
      columnInputValues: {
        ...this.state.columnInputValues,
        [event.target.name]: newValue,
      },
    }
    this.setState(newState)
    if (this.props.onChange) {
      this.props.onChange(newState)
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
    const { showBody, dataSource } = this.props
    const { columns } = this.state
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
      />
    )
  }
}

export default MLTable
