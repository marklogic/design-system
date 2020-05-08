import React from 'react'
import PropTypes from 'prop-types'
import { ConfigProvider } from 'antd'

const MLConfigProvider = (props) => {
  return (
    <MLConfigContext.Provider
      value={{
        size: props.size,
        dateFormat: props.dateFormat,
        dateTimeFormat: props.dateTimeFormat,
        monthFormat: props.monthFormat,
        weekFormat: props.weekFormat,
        yearFormat: props.yearFormat,
      }}
    >
      {/* Include Ant's normal config values as well, for Ant components to use */}
      <ConfigProvider
        {...props}
      >
        {props.children}
      </ConfigProvider>
    </MLConfigContext.Provider>
  )
}

MLConfigProvider.defaultProps = {
  dateFormat: 'YYYY-MMM-DD',
  dateTimeFormat: 'YYYY-MMM-DD, HH:mm:ss',
  monthFormat: 'MMM-YY',
  weekFormat: 'YYYY-MMM-DD',
  yearFormat: 'YYYY',
}

MLConfigProvider.propTypes = {
  dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  dateTimeFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  monthFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  weekFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  yearFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
}

export const MLConfigContext = React.createContext(MLConfigProvider.defaultProps)

export default MLConfigProvider
