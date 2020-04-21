import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { MLConfigProvider, MLDatePicker } from '../src'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Other/MLConfigProvider',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

const configValues = {
  dateFormat: ['YYYY-MMM-DD', 'MM/DD/YYYY', 'M/D/YY'], // Default for all dates, and datePicker
  timeFormat: ['HH:mm:ss'],
  dateTimeFormat: ['YYYY-MMM-DD, HH:mm:ss', 'LT', 'LTS'], // default for all dates with times, and datePicker with times
  monthFormat: 'MMM-YY', // default for datePicker month mode
  weekFormat: 'YYYY-MMM-DD', // default for datePicker week mode
}

export const basic = () => {
  return (
    <div>
      <div>This component doesn't seem to allow updates in Storybook, so here are some static examples:</div>
      <div>TODO: Consider using this for global settings that are spec'd in the tickets</div>
      <br />
      <div>Near the top of the tree of your application (such that all marklogic-ui-library components are descendants of this), you must provide a MLConfigProvider like so:</div>
      <MLConfigProvider {...configValues}>
        (application components go here)
        <MLDatePicker />
        ...etc
      </MLConfigProvider>
    </div>
  )
}
