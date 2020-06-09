// Sort an array of time unit labels based on a time format string (only hour, minute, second supported)
export default function getOrderedTimeUnits({ hourLabel, minuteLabel, secondLabel, format }) {
  // Determine the order, and which are included, of hr/min/sec
  const unitMatchers = [
    // Test for the various ways Moment supports hr/min/sec in the format
    [hourLabel, /HH?|hh?|kk?/],
    [minuteLabel, /mm?/],
    [secondLabel, /ss?|S+/],
  ]
  return unitMatchers
    .filter((pair) => (
      format.match(pair[1]) !== null
    ))
    .map((pair) => {
      return [pair[0], format.match(pair[1]).index]
    })
    .sort((a, b) => a[1] - b[1])
    .map((pair) => pair[0])
}
