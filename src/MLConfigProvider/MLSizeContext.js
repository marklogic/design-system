import React from 'react'

const MLSizeContext = React.createContext(undefined)

export const MLSizeContextProvider = ({ children, size }) => (
  <MLSizeContext.Consumer>
    {(originalSize) => (
      <MLSizeContext.Provider value={size || originalSize}>{children}</MLSizeContext.Provider>
    )}
  </MLSizeContext.Consumer>
)

MLSizeContext.displayName = 'MLConfigProvider.MLSizeContext'

export default MLSizeContext
