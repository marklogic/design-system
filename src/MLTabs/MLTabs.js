import React from 'react'
import { Tabs } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLTabs = (props) => {
  return (
    <Tabs
      {...props}
      className={classNames('ml-tabs', props.className)}
    >
      {props.children}
    </Tabs>
  )
}

MLTabs.defaultProps = {
}

MLTabs.propTypes = {
}

export default MLTabs
