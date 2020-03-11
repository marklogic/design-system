import React from 'react'
import { action } from '@storybook/addon-actions'
import MLTable from '../src/ml-table'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'
import sampleNestedData from './11-Table.sample-nested-data.js'

export default {
  title: 'Data Display/Table',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here'
    }
  }
}

const pureLessThanSorter = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0
const extractSortColumnDecorator = (sortFn) => (dataIndex) => (a, b) => sortFn(a[dataIndex], b[dataIndex])

const lessThanSorter = extractSortColumnDecorator(pureLessThanSorter)
const dateSorter = extractSortColumnDecorator((a, b) => {
  return pureLessThanSorter(new Date(a), new Date(b))
})

const columns = [
  { title: 'Employee Number', dataIndex: 'emp_no', key: 'emp_no', sorter: lessThanSorter('emp_no') },
  { title: 'First Name', dataIndex: 'first_name', key: 'first_name', sorter: lessThanSorter('first_name'), defaultSortOrder: 'descend' },
  { title: 'Last Name', dataIndex: 'last_name', key: 'last_name', sorter: lessThanSorter('last_name') },
  { title: 'Gender', dataIndex: 'gender', key: 'gender', sorter: lessThanSorter('gender') },
  { title: 'Hire Date', dataIndex: 'hire_date', key: 'hire_date', sorter: dateSorter('hire_date') },
  {
    title: 'Work Experience',
    dataIndex: 'work_experience',
    key: 'work_experience',
    columns: [
      { title: 'Employee Number', dataIndex: 'emp_no', key: 'emp_no', sorter: lessThanSorter('emp_no') },
      { title: 'Department Number', dataIndex: 'dept_no', key: 'dept_no', sorter: lessThanSorter('dept_no') },
      { title: 'Department Name', dataIndex: 'dept_name', key: 'dept_name', sorter: lessThanSorter('dept_name') },
      {
        title: 'Job Titles',
        dataIndex: 'titles',
        key: 'titles',
        columns: [
          { title: 'Job Title', dataIndex: 'title', key: 'title', sorter: lessThanSorter('title') },
          { title: 'From', dataIndex: 'from_date', key: 'from_date', sorter: dateSorter('from_date') },
          { title: 'To', dataIndex: 'to_date', key: 'to_date', sorter: dateSorter('to_date') }
        ]
      }
    ]
  },
  {
    title: 'Salary History',
    dataIndex: 'salary',
    key: 'salary',
    columns: [
      { title: 'Salary', dataIndex: 'salary', key: 'salary2', sorter: lessThanSorter('salary') },
      { title: 'From', dataIndex: 'from_date', key: 'from_date', sorter: dateSorter('from_date') },
      { title: 'To', dataIndex: 'to_date', key: 'to_date', sorter: dateSorter('to_date') }
    ]
  }
]

export const basic = () => {
  const props = {
    dataSource: sampleNestedData,
    columns: columns
  }
  return (<MLTable {...props} />)
}
