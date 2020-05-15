import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLDatePicker, MLConfigProvider } from '@marklogic/design-system'
import { withKnobs, boolean, select, text, array } from '@storybook/addon-knobs'
const { MLRangePicker } = MLDatePicker

export default {
  title: 'Data Entry/MLDatePicker',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

const disableOddDates = (d) => d.date() % 2 === 0

const configValues = {
  dateFormat: ['YYYY-MMM-DD', 'MM/DD/YYYY', 'M/D/YY'],
  timeFormat: ['HH:mm:ss'],
  dateTimeFormat: ['YYYY-MMM-DD, HH:mm:ss', 'YYYY-MMM-DD, HH:mm', 'LT', 'LTS'],
  monthFormat: 'YYYY-MM',
  weekFormat: 'YYYY-wo',
  yearFormat: 'YYYY',
}

export const datePicker = () => {
  const props = {
    // locale: ('locale', default),
    size: select('size', {
      small: 'small',
      middle: 'middle',
      large: 'large',
    }, 'small'),
    bordered: boolean('bordered', true),
    autoFocus: boolean('autoFocus', false),
    disabled: boolean('disabled', false),
    disabledDate: select('disabledDate', {
      None: undefined,
      '(d) => d.date() % 2 === 0': disableOddDates,
    }, undefined),
    placeholder: text('placeholder', ''),
    onCalendarChange: action('onCalendarChange'),
    onOpenChange: action('onOpenChange'),
    onPanelChange: action('onPanelChange'),
    showTime: boolean('showTime', false),
  }
  return (
    <div>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      <MLConfigProvider {...configValues}>
        <div>date: <MLDatePicker {...props} /></div>
        <div>week: <MLDatePicker.MLWeekPicker {...props} /></div>
        <div>month: <MLDatePicker.MLMonthPicker {...props} /></div>
      </MLConfigProvider>
    </div>
  )
}

export const rangePicker = () => {
  const props = {
    // locale: ('locale', default),
    size: select('size', {
      small: 'small',
      middle: 'middle',
      large: 'large',
    }, 'small'),
    bordered: boolean('bordered', true),
    autoFocus: boolean('autoFocus', false),
    disabled: boolean('disabled', false),
    disabledDate: select('disabledDate', {
      None: undefined,
      '(d) => d.date() % 2 === 0': disableOddDates,
    }, undefined),
    placeholder: array('placeholder', ['Start', 'End']),
    onCalendarChange: action('onCalendarChange'),
    onOpenChange: action('onOpenChange'),
    onPanelChange: action('onPanelChange'),
    showTime: boolean('showTime', false),
    separator: (
      <span className='ant-picker-separator'>{text('separator', '–')}</span> // en-dash
    ),
  }
  return (
    <div>
      <div>Note: On the hosted (non-local) StoryBook, this component's custom CSS is not currently rendering correctly. This should not affect use of the component in your app.</div>
      <MLConfigProvider {...configValues}>
        <MLRangePicker {...props} />
      </MLConfigProvider>
    </div>
  )
}
