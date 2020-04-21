import React from 'react'
import { ConfigProvider } from 'antd'

export const MLConfigContext = React.createContext('YYYY')

const MLConfigProvider = (props) => {
  return (
    <MLConfigContext.Provider value={{ dateFormat: props.dateFormat }}>
      <ConfigProvider>
        {props.children}
      </ConfigProvider>
    </MLConfigContext.Provider>
  )
}

export default MLConfigProvider
