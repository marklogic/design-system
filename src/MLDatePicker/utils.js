import { get, isArray } from 'lodash-es'

export const pickerPropsFromContext = ({ dateFormat, dateTimeFormat, weekFormat, monthFormat, yearFormat }, props) => {
  let format
  let { showTime } = props
  if (props.showTime && props.picker !== 'date') {
    console.warn("DatePicker: 'showTime' can only be used with 'date' picker")
    showTime = false
  }
  if (showTime === true) {
    // Use the first dateTimeFormat if multiple are provided, because TimePicker chokes on arrays of formats
    format = isArray(dateTimeFormat) ? dateTimeFormat[0] : dateTimeFormat
  } else {
    format = get({
      week: weekFormat,
      month: monthFormat,
      year: yearFormat,
      // Nothing special for quarter or year pickers
    }, props.picker, dateFormat)
  }
  return { format, showTime }
}
