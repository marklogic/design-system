import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import classNames from 'classnames'
const { ItemGroup } = Menu

const MLItemGroup = React.forwardRef((props, ref) => {
  return (
    <ItemGroup
      ref={ref}
      {...props}
      className={classNames('ml-menu-item-group', props.className)}
    >
      {props.children}
    </ItemGroup>
  )
})

MLItemGroup.displayName = 'MLMenu.MLItemGroup'

export default MLItemGroup
