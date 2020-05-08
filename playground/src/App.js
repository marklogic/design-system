import React, { Component } from 'react'

import {
  MLButton,
  MLDatePicker,
  MLLayout,
  MLSlider,
  MLIcon,
  MLConfigProvider,
} from '@marklogic/design-system'

const configValues = {
  dateFormat: 'YYYY-MMM-DD', // Default for all dates, and DatePicker
  dateTimeFormat: 'YYYY-MMM-DD, HH:mm:ss', // default for all dates with times, and DatePicker with times
  monthFormat: 'MMM-YY', // default for Month picker
  weekFormat: 'YYYY-MMM-DD', // default for Week picker
  yearFormat: 'YYYY', // default for Year picker
}

export default class App extends Component {
  render() {
    return (
      <div>
        <MLConfigProvider {...configValues}>
          <MLLayout>
            <MLLayout.MLHeader>Header</MLLayout.MLHeader>
            <MLLayout.MLContent>
              <MLButton type='primary'>Test</MLButton>
              <MLButton type='highlight'>Test</MLButton>
              <MLIcon.Route />
              <MLIcon.CheckCircleFilled />
              <div>
                <MLSlider tooltipPlacement='top' />
              </div>
              <MLDatePicker size={"small"}/>
              <MLDatePicker size={"default"}/>
              <MLDatePicker size={"large"}/>
            </MLLayout.MLContent>
            <MLDatePicker picker='week' />
            <MLLayout.MLFooter year='2019' />
          </MLLayout>
        </MLConfigProvider>
      </div>
    )
  }
}
