import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { MLConfigProvider, MLDatePicker, MLTimePicker } from '@marklogic/design-system'
import { withKnobs, array, text } from '@storybook/addon-knobs'

export default {
  title: 'Other/MLConfigProvider',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const configValues = {
    dateFormat: array('dateFormat', ['YYYY-MMM-DD', 'MM/DD/YYYY', 'M/D/YY'], '|'), // Default for all dates, and datePicker
    dateTimeFormat: array('dateTimeFormat', ['YYYY-MMM-DD, HH:mm', 'LT', 'LTS'], '|'), // default for all dates with times, and datePicker with times
    weekFormat: text('weekFormat', 'YYYY-wo'), // default for datePicker week mode
    monthFormat: text('monthFormat', 'YYYY-MM'), // default for datePicker month mode
    timeFormat: text('timeFormat', 'HH:mm'),
  }

  return (
    <div>
      <br />
      <div>Near the top of the tree of your application (such that all @marklogic/design-system components are descendants of this), you must provide a MLConfigProvider like so:</div>
      <br />
      <MLConfigProvider {...configValues}>
        (application components go here)<br />
        <MLDatePicker /><br />
        <MLDatePicker showTime={true} /><br />
        <MLDatePicker.MLRangePicker /><br />
        <MLDatePicker.MLRangePicker showTime={true} /><br />
        <MLDatePicker.MLWeekPicker /><br />
        <MLDatePicker.MLMonthPicker /><br />
        <MLTimePicker /><br />
        ...etc
      </MLConfigProvider>
    </div>
  )
}
