import React from 'react'
import { Pagination } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLPagination = (props) => {
  const { total, pageSize, defaultPageSize } = props
  const effectivePageSize = pageSize || defaultPageSize
  let { showQuickJumper } = props
  if (showQuickJumper === 'auto' || showQuickJumper === undefined) {
    showQuickJumper = (total / effectivePageSize) > 6
  }
  return (
    <Pagination
      {...props}
      showQuickJumper={showQuickJumper}
      className={classNames('ml-pagination', props.className)}
    >
      {props.children}
    </Pagination>
  )
}

MLPagination.defaultProps = {
  showQuickJumper: 'auto',
  defaultPageSize: 10,
  showSizeChanger: true,
  simple: false,
  size: 'small',
}

MLPagination.propTypes = {
  /** Current page number */
  current: PropTypes.number,
  /** Default initial page number */
  defaultCurrent: PropTypes.number,
  /** Default number of data items per page */
  defaultPageSize: PropTypes.number,
  /** Disable pagination */
  disabled: PropTypes.bool,
  /** Whether to hide pager on single page */
  hideOnSinglePage: PropTypes.bool,
  /** To customize item's innerHTML */
  itemRender: PropTypes.func,
  /** Number of data items per page */
  pageSize: PropTypes.number,
  /** Specify the sizeChanger options */
  pageSizeOptions: PropTypes.arrayOf(PropTypes.string),
  /** Show less page items */
  showLessItems: PropTypes.bool,
  /** Determine whether you can jump to pages directly.
   *  'auto' means: true if 6+ pages. */
  showQuickJumper: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.bool, PropTypes.object]),
  /** Determine whether pageSize can be changed */
  showSizeChanger: PropTypes.bool,
  /** Show page item's title */
  showTitle: PropTypes.bool,
  /** To display the total number and range */
  showTotal: PropTypes.func,
  /** Whether to use simple mode */
  simple: PropTypes.bool,
  /** Specify the size of Pagination, can be set to small */
  size: PropTypes.string,
  /** Total number of data items */
  total: PropTypes.number,
  /** Called when the page number is changed, and it takes the resulting page number and pageSize as its arguments */
  onChange: PropTypes.func,
}

export default MLPagination
