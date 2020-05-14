import React, { Component, useState } from 'react'
import {
  MLButton,
  MLDatePicker,
  MLLayout,
  MLSlider,
  MLRadio,
  MLIcon,
  MLTable,
  MLTag,
  MLCollapse,
  MLConfigProvider,
} from '@marklogic/design-system'

import {
  Route,
  CheckCircleFilled,
} from '@marklogic/design-system/MLIcon'

const configValues = {
  dateFormat: 'YYYY-MMM-DD', // Default for all dates, and DatePicker
  dateTimeFormat: 'YYYY-MMM-DD, HH:mm:ss', // default for all dates with times, and DatePicker with times
  monthFormat: 'YYYY-MM', // default for Month picker
  weekFormat: 'YYYY-wo', // default for Week picker
  yearFormat: 'YYYY', // default for Year picker
}

import _ from 'lodash'

const pureLessThanSorter = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0
const extractSortColumnDecorator = (sortFn) => (dataIndex) => (a, b) => sortFn(a[dataIndex], b[dataIndex])

const lessThanSorter = extractSortColumnDecorator(pureLessThanSorter)

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        {
          dataIndex: 'col1',
          key: 'col1',
          title: () => (
            <div>
              Column 1
              <MLIcon.InfoCircleFilled />
            </div>
          ),
          sorter: lessThanSorter('col1'),
        },
        {
          dataIndex: 'col2',
          key: 'col2',
          title: 'Column 2',
        },
        {
          dataIndex: 'col3',
          key: 'col3',
          title: 'Column 3',
        },
        {
          dataIndex: 'col4',
          key: 'col4',
          title: 'Column 4',
        },
        {
          dataIndex: 'col5',
          key: 'col5',
          title: 'Column 5',
        },
      ],
    }
  }

  render () {
    return (
      <div>
        <MLLayout>
          <MLLayout.MLHeader>Header</MLLayout.MLHeader>
          <MLLayout.MLContent>
            <MLButton
              type='primary'
              onClick={() => {
                this.setState({ columns: _.shuffle(this.state.columns) })
              }}
            >
              Shuffle columns
            </MLButton>
            <MLTable
              columns={this.state.columns}
              scroll={{ y: 240 }}
              dataSource={[
                {
                  col1: 'garden plot',
                  col2: 'garden seed',
                  col3: 'garden spring',
                  col4: 'garden worm',
                  col5: 'garden water',
                },
                {
                  col1: 'compost plot',
                  col2: 'compost seed',
                  col3: 'compost spring',
                  col4: 'compost worm',
                  col5: 'compost water',
                },
                {
                  col1: 'roots plot',
                  col2: 'roots seed',
                  col3: 'roots spring',
                  col4: 'roots worm',
                  col5: 'roots water',
                },
                {
                  col1: 'plough plot',
                  col2: 'plough seed',
                  col3: 'plough spring',
                  col4: 'plough worm',
                  col5: 'plough water',
                },
                {
                  col1: 'weed plot',
                  col2: 'weed seed',
                  col3: 'weed spring',
                  col4: 'weed worm',
                  col5: 'weed water',
                },
                {
                  col1: 'crop plot',
                  col2: 'crop seed',
                  col3: 'crop spring',
                  col4: 'crop worm',
                  col5: 'crop water',
                },
                {
                  col1: 'soil plot',
                  col2: 'soil seed',
                  col3: 'soil spring',
                  col4: 'soil worm',
                  col5: 'soil water',
                }]}
              showBody
            />
          </MLLayout.MLContent>
          <MLLayout.MLFooter year='2020' />
        </MLLayout>
      </div>
    )
  }
}
