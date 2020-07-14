import React from 'react'
import PropTypes from 'prop-types'
import { ConfigProvider } from 'antd'
import classNames from 'classnames'

const MLConfigProvider = React.forwardRef((props, ref) => {
  return (
    <MLConfigContext.Provider
      value={props}
    >
      {/* Include Ant's normal config values as well, for Ant components to use */}
      <ConfigProvider
        ref={ref}
        {...props}
        className={classNames('ml-config-provider', props.className)}
      >
        {props.children}
      </ConfigProvider>
    </MLConfigContext.Provider>
  )
})

MLConfigProvider.defaultProps = {
  dateFormat: 'YYYY-MMM-DD',
  timeFormat: 'HH:mm:ss',
  dateTimeFormat: 'YYYY-MMM-DD, HH:mm:ss',
  monthFormat: 'YYYY-MM',
  weekFormat: 'YYYY-wo',
}

MLConfigProvider.propTypes = {
  dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  timeFormat: PropTypes.string,
  dateTimeFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  monthFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  weekFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
}

export const MLConfigContext = React.createContext(MLConfigProvider.defaultProps)

MLConfigProvider.displayName = 'MLConfigProvider'

export default MLConfigProvider
