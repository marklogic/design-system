import React from 'react'

const MLTableContext = React.createContext(false)

export const MLTableContextProvider = ({ isInsideTable, children }) => (
  <MLTableContext.Consumer>
    {(originalIsInsideTable) => (
      <MLTableContext.Provider value={originalIsInsideTable || isInsideTable}>{children}</MLTableContext.Provider>
    )}
  </MLTableContext.Consumer>
)

MLTableContext.displayName = 'MLConfigProvider.MLTableContext'

export default MLTableContext
