import { get, isArray } from 'lodash-es'

export const pickerPropsFromContext = (picker, { dateFormat, dateTimeFormat, weekFormat, monthFormat, yearFormat }, props) => {
  let format
  let { showTime } = props
  if (props.showTime && !['date', 'range'].includes(picker)) {
    console.warn("Warning: 'showTime' can only be used with DatePicker or RangePicker")
    showTime = false
  }
  if (showTime === true) {
    format = dateTimeFormat
  } else {
    format = get({
      date: dateFormat,
      week: weekFormat,
      month: monthFormat,
      year: yearFormat,
      // Nothing special for quarter or year pickers
    }, picker, dateFormat)
  }
  const primaryFormat = isArray(format) ? format[0] : format
  return { primaryFormat, format, showTime }
}
