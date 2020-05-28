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
  /** Forced render of content in tabs, not lazy render after clicking on tabs */
  forceRender: PropTypes.bool,
  /** TabPane's key */
  key: PropTypes.string,
  /** Show text in TabPane's head */
  tab: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

MLTabPane.displayName = 'MLTabs.MLTabPane'

export default MLTabPane
