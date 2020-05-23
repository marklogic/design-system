import React, { Component } from 'react'

import {
  MLButton,
  MLDatePicker,
  MLLayout,
  MLSlider,
  MLConfigProvider,
  MLEditableSlider,
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

export default class App extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: '400px',
          }}
        >
          <MLEditableSlider
            debounceTime={200}
            defaultValue={0}
            max={100}
            min={0}
            onChange={(v) => console.log(v)}
          />
          <MLEditableSlider
            debounceTime={200}
            defaultValue={[
              20,
              70,
            ]}
            max={100}
            min={0}
            range
            onChange={(v) => console.log(v)}
          />
        </div>
      </div>
    )
  }
}
