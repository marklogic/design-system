import React from 'react'
import * as AntIcons from './ant-icons'
import * as FontAwesomeIcons from './font-awesome-icons'
import '../ml-icon.less'

export * from './font-awesome-icons'
export * from './ant-icons'

// Combine them into one set of icons for normal use
const MLIcon = Object.assign({},
  AntIcons,
  FontAwesomeIcons,
)

export default MLIcon
