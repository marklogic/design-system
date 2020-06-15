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
  /** Current TabPane's key */
  activeKey: PropTypes.string,
  /** Whether to change tabs with animation. Only works while tabPosition="top"\,"bottom" */
  animated: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /** replace the TabBar */
  renderTabBar: PropTypes.func,
  /** Initial active TabPane's key, if activeKey is not set. */
  defaultActiveKey: PropTypes.string,
  /** Hide plus icon or not. Only works while type="editable-card" */
  hideAdd: PropTypes.bool,
  /** preset tab bar size */
  size: PropTypes.oneOf(['large', 'default', 'small']),
  /** Extra content in tab bar */
  tabBarExtraContent: PropTypes.node,
  /** The gap between tabs */
  tabBarGutter: PropTypes.number,
  /** Tab bar style object */
  tabBarStyle: PropTypes.object,
  /** Position of tabs */
  tabPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** Basic style of tabs */
  type: PropTypes.oneOf(['line', 'card', 'editable-card']),
  /** Callback executed when active tab is changed */
  onChange: PropTypes.func,
  /** Callback executed when tab is added or removed. Only works while type="editable-card" */
  onEdit: PropTypes.func,
  /** Callback executed when next button is clicked */
  onNextClick: PropTypes.func,
  /** Callback executed when prev button is clicked */
  onPrevClick: PropTypes.func,
  /** Callback executed when tab is clicked */
  onTabClick: PropTypes.func,
}

MLTabs.displayName = 'MLTabs'

export default MLTabs
