import React from 'react'
import { action } from '@storybook/addon-actions'
import MLTable from '../src/ml-table'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'
import { sampleBasicData, sampleNestedData } from './11-Table.sample-data.js'

export default {
  title: 'Data Display/Table',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
    dataSource: sampleBasicData.dataSource,
    columns: sampleBasicData.columns,
  }
  return (<MLTable {...props} onChange={action('onChange')} />)
}

export const nestedTables = () => {
  const props = {
    dataSource: sampleNestedData.dataSource,
    columns: sampleNestedData.columns,
  }
  // TODO: Handle onChange for nested tables, and figure out a way to differentiate the callback values
  return (<MLTable {...props} onChange={action('onChange')} />)
}
