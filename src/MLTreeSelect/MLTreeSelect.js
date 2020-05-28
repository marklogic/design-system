import React from 'react'
import { TreeSelect } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLTreeSelect = (props) => {
  return (
    <TreeSelect
      {...props}
      className={classNames('ml-tree-select', props.className)}
    >
      {props.children}
    </TreeSelect>
  )
}

MLTreeSelect.SHOW_ALL = TreeSelect.SHOW_ALL
MLTreeSelect.SHOW_PARENT = TreeSelect.SHOW_PARENT
MLTreeSelect.SHOW_CHILD = TreeSelect.SHOW_CHILD

MLTreeSelect.defaultProps = {
  allowClear: true,
  size: 'small',
}

MLTreeSelect.propTypes = {
  /** Whether allow clear */
  allowClear: PropTypes.bool,
  /** auto clear search input value when multiple select is selected/deselected */
  autoClearSearchValue: PropTypes.bool,
  /** To set the initial selected treeNode(s). */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  /** Disabled or not */
  disabled: PropTypes.bool,
  /** className of dropdown menu */
  dropdownClassName: PropTypes.string,
  /** Determine whether the dropdown menu and the select input are the same width. Default set min-width same as input. */
  dropdownMatchSelectWidth: PropTypes.bool,
  /** To set the style of the dropdown menu */
  dropdownStyle: PropTypes.object,
  /** Whether to filter treeNodes by input value. The value of treeNodeFilterProp is used for filtering by default. */
  filterTreeNode: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  /** To set the container of the dropdown menu. The default is to create a div element in body, you can reset it to the scrolling area and make a relative reposition. example */
  getPopupContainer: PropTypes.func,
  /** whether to embed label in value, turn the format of value from string to {value: string, label: ReactNode, halfChecked: string[]} */
  labelInValue: PropTypes.bool,
  /** Load data asynchronously. */
  loadData: PropTypes.func,
  /** Max tag count to show */
  maxTagCount: PropTypes.number,
  /** Placeholder for not showing tags */
  maxTagPlaceholder: PropTypes.any,
  /** Support multiple or not, will be true when enable treeCheckable. */
  multiple: PropTypes.bool,
  /** Placeholder of the select input */
  placeholder: PropTypes.string,
  /** Placeholder of the search input */
  searchPlaceholder: PropTypes.string,
  /** work with onSearch to make search value controlled. */
  searchValue: PropTypes.string,
  /** Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to true */
  treeIcon: PropTypes.bool,
  /** The way show selected item in box. Default: just show child nodes. TreeSelect.SHOW_ALL: show all checked treeNodes (include parent treeNode). TreeSelect.SHOW_PARENT: show checked treeNodes (just show parent treeNode). */
  showCheckedStrategy: PropTypes.oneOf([MLTreeSelect.SHOW_ALL, MLTreeSelect.SHOW_PARENT, MLTreeSelect.SHOW_CHILD]),
  /** Support search or not */
  showSearch: PropTypes.bool,
  /** To set the size of the select input, options: large small */
  size: PropTypes.string,
  /** The custom suffix icon */
  suffixIcon: PropTypes.node,
  /** Whether to show checkbox on the treeNodes */
  treeCheckable: PropTypes.bool,
  /** Whether to check nodes precisely (in the checkable mode), means parent and child nodes are not associated, and it will make labelInValue be true */
  treeCheckStrictly: PropTypes.bool,
  /** Data of the treeNodes, manual construction work is no longer needed if this property has been set(ensure the Uniqueness of each value) */
  treeData: PropTypes.array,
  /** Enable simple mode of treeData. Changes the treeData schema to: [{id:1, pId:0, value:'1', title:"test1",...},...] where pId is parent node's id). It is possible to replace the default id and pId keys by providing object to treeDataSimpleMode */
  treeDataSimpleMode: PropTypes.oneOfType([PropTypes.oneOf([false]), PropTypes.object]),
  /** Whether to expand all treeNodes by default */
  treeDefaultExpandAll: PropTypes.bool,
  /** Default expanded treeNodes */
  treeDefaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),
  /** Set expanded keys */
  treeExpandedKeys: PropTypes.arrayOf(PropTypes.string),
  /** Will be used for filtering if filterTreeNode returns true */
  treeNodeFilterProp: PropTypes.string,
  /** Will render as content of select */
  treeNodeLabelProp: PropTypes.string,
  /** To set the current selected treeNode(s). */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  /** A callback function, can be executed when selected treeNodes or input value change */
  onChange: PropTypes.func,
  /** A callback function, can be executed when the search input changes. */
  onSearch: PropTypes.func,
  /** A callback function, can be executed when you select a treeNode. */
  onSelect: PropTypes.func,
}

export default MLTreeSelect
