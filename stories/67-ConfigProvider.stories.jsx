import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { MLConfigProvider, MLDatePicker } from '@marklogic/design-system'
import { withKnobs } from '@storybook/addon-knobs'
import mdx from './67-ConfigProvider.mdx'

export default {
  title: 'Other/MLConfigProvider',
  decorators: [withKnobs],
  parameters: {
    fileName: '67-ConfigProvider.stories.jsx',
    docs: {
      page: mdx,
    },
    info: {
      text: 'Component description goes here',
    },
  },
}

const configValues = {
  dateFormat: ['YYYY-MMM-DD', 'MM/DD/YYYY', 'M/D/YY'], // Default for all dates, and datePicker
  timeFormat: ['HH:mm:ss'],
  dateTimeFormat: ['YYYY-MMM-DD, HH:mm:ss', 'LT', 'LTS'], // default for all dates with times, and datePicker with times
  monthFormat: 'YYYY-MM', // default for datePicker month mode
  weekFormat: 'YYYY-wo', // default for datePicker week mode
}

export const basic = () => {
  return (
    <div>
      <div>This component doesn't seem to allow updates in Storybook, so here are some static examples:</div>
      <div>TODO: Consider using this for global settings that are spec'd in the tickets</div>
      <br />
      <div>Near the top of the tree of your application (such that all @marklogic/design-system components are descendants of this), you must provide a MLConfigProvider like so:</div>
      <MLConfigProvider {...configValues}>
        (application components go here)
        <MLDatePicker />
        ...etc
      </MLConfigProvider>
    </div>
  )
}
