import React from 'react'
import { Tabs } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const { TabPane } = Tabs

const MLTabPane = (props) => {
  return (
    <TabPane
      {...props}
      className={classNames('ml-tabs-tab-pane', props.className)}
    >
      {props.children}
    </TabPane>
  )
}

MLTabPane.defaultProps = {
}

MLTabPane.propTypes = {
}

MLTabPane.displayName = 'MLTabs.MLTabPane'

export default MLTabPane
