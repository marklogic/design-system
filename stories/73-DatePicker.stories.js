import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLDatePicker, MLConfigProvider } from 'marklogic-ui-library'
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

const noopDateRender = (d) => <div>{d.date()}</div>
const circleFirstDateRenderFn = (d) => {
  const style = {}
  if (d.date() === 1) {
    style.border = '1px solid #1890ff'
    style.borderRadius = '50%'
  }
  return (
    <div className='ant-picker-cell-inner' style={style}>
      {d.date()}
    </div>
  )
}

const disableOddDates = (d) => d.date() % 2 === 0

const configValues = {
  dateFormat: ['YYYY-MMM-DD', 'MM/DD/YYYY', 'M/D/YY'],
  timeFormat: ['HH:mm:ss'],
  dateTimeFormat: ['YYYY-MMM-DD, HH:mm:ss', 'LT', 'LTS'],
  monthFormat: 'MMM-YY',
  weekFormat: 'YYYY-MMM-DD',
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
    // style: object('style'),
    // popupStyle: object('popupStyle'),
    autoFocus: boolean('autoFocus', false),
    disabled: boolean('disabled', false),
    // dateRender: select('dateRender', {
    //   None: noopDateRender,
    //   'Bordered style': circleFirstDateRenderFn
    // }, noopDateRender),
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
    <MLConfigProvider {...configValues}>
      <div>date: <MLDatePicker {...props} picker='date' /></div>
      <div>week: <MLDatePicker {...props} picker='week' /></div>
      <div>month: <MLDatePicker {...props} picker='month' /></div>
      <div>year: <MLDatePicker {...props} picker='year' /></div>
    </MLConfigProvider>
  )
}

export const rangePicker = () => {
  const props = {
    picker: select('picker', {
      date: 'date',
      week: 'week',
      month: 'month',
      quarter: 'quarter',
      year: 'year',
    }, 'date'),
    // locale: ('locale', default),
    size: select('size', {
      small: 'small',
      middle: 'middle',
      large: 'large',
    }, 'small'),
    bordered: boolean('bordered', true),
    // style: object('style'),
    // popupStyle: object('popupStyle'),
    autoFocus: boolean('autoFocus', false),
    disabled: boolean('disabled', false),
    // dateRender: select('dateRender', {
    //   None: noopDateRender,
    //   'Bordered style': circleFirstDateRenderFn
    // }, noopDateRender),
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
    <MLConfigProvider {...configValues}>
      <div>date: <MLRangePicker {...props} picker='date' /></div>
      <div>week: <MLRangePicker {...props} picker='week' /></div>
      <div>month: <MLRangePicker {...props} picker='month' /></div>
      <div>year: <MLRangePicker {...props} picker='year' /></div>
    </MLConfigProvider>
  )
}
