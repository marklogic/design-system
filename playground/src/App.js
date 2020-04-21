import React, { Component } from 'react'

import {
  MLButton,
  MLDatePicker,
  MLLayout,
  MLSlider,
  MLIcon,
  MLConfigProvider,
} from 'marklogic-ui-library'

const configValues = {
  dateFormat: 'YYYY-MMM-DD', // Default for all dates, and datePicker
  dateTimeFormat: 'YYYY-MMM-DD, HH:mm:ss', // default for all dates with times, and datePicker with times
  monthFormat: 'MMM-YY', // default for datePicker month mode
  weekFormat: 'YYYY-MMM-DD', // default for datePicker week mode
}

export default class App extends Component {
  render () {
    return (
      <div>
        <MLConfigProvider {...configValues}>
          <MLLayout>
            <MLLayout.MLHeader>Header</MLLayout.MLHeader>
            <MLDatePicker />
            <MLLayout.MLContent>
              <MLButton type='primary'>Test</MLButton>
              <MLIcon.Route />
              <MLIcon.CheckCircleFilled />
              <div>
                <MLSlider tooltipPlacement='top' />
              </div>
            </MLLayout.MLContent>
            <MLDatePicker picker='week' />
            <MLLayout.MLFooter year='2019' />
          </MLLayout>
        </MLConfigProvider>
      </div>
    )
  }
}
