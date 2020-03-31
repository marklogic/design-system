import React, { Component } from 'react'

import {
  MLButton,
  MLDatePicker,
  MLLayout,
  MLSlider,
  MLRadio,
  MLIcon,
} from 'marklogic-ui-library/dist/index.es.js'
// } from 'marklogic-ui-library/src'

// import 'marklogic-ui-library/src/*.less'

// import 'marklogic-ui-library/dist/index.css'

export default class App extends Component {
  render () {
    console.log(MLIcon.CheckCircleFilled)
    // debugger
    return (
      <div>
        <MLLayout>
          <MLLayout.MLHeader>Header</MLLayout.MLHeader>
          <MLLayout.MLContent>
            <MLButton type='primary'>Test</MLButton>
            <MLIcon.Route />
            <MLIcon.CheckCircleFilled />
            <div>
              <MLSlider tooltipPlacement={'top'} />
            </div>
          </MLLayout.MLContent>
          <MLLayout.MLFooter year='2019' />
        </MLLayout>
      </div>
    )
  }
}

