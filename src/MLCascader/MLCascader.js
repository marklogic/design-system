import React from 'react'
import { Cascader } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLCascader = (props) => {
  return (
    <Cascader
      {...props}
      className={classNames('ml-cascader', props.className)}
    >
      {props.children}
    </Cascader>
  )
}

MLCascader.defaultProps = {
  size: 'small',
}

MLCascader.propTypes = {
  /** whether allow clear */
  allowClear: PropTypes.bool,
  /** get focus when component mounted */
  autoFocus: PropTypes.bool,
  /** change value on each selection if set to true, see above demo for details */
  changeOnSelect: PropTypes.bool,
  /** additional css class */
  className: PropTypes.string,
  /** initial selected value */
  defaultValue: PropTypes.arrayOf(PropTypes.string),
  /** whether disabled select */
  disabled: PropTypes.bool,
  /** render function of displaying selected options */
  displayRender: PropTypes.func,
  /** expand current item when click or hover, one of 'click' 'hover' */
  expandTrigger: PropTypes.string,
  /** custom field name for label and value and children (before 3.7.0 it calls filedNames which is typo）) */
  fieldNames: PropTypes.object,
  /** Parent Node which the selector should be rendered to. Default to body. When position issues happen, try to modify it into scrollable content and position it relative.example */
  getPopupContainer: PropTypes.func,
  /** To load option lazily, and it cannot work with showSearch */
  loadData: PropTypes.func,
  /** Specify content to show when no result matches. */
  notFoundContent: PropTypes.string,
  /** data options of cascade */
  options: PropTypes.array,
  /** input placeholder */
  placeholder: PropTypes.string,
  /** additional className of popup overlay */
  popupClassName: PropTypes.string,
  /** use preset popup align config from builtinPlacements: bottomLeft bottomRight topLeft topRight */
  popupPlacement: PropTypes.string,
  /** set visible of cascader popup */
  popupVisible: PropTypes.bool,
  /** Whether show search input in single mode. */
  showSearch: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /** input size, one of large default small */
  size: PropTypes.string,
  /** additional style */
  style: PropTypes.string,
  /** The custom suffix icon */
  suffixIcon: PropTypes.node,
  /** selected value */
  value: PropTypes.arrayOf(PropTypes.string),
  /** callback when finishing cascader select */
  onChange: PropTypes.func,
  /** callback when popup shown or hidden */
  onPopupVisibleChange: PropTypes.func,
}

MLCascader.displayName = 'MLCascader'

export default MLCascader
