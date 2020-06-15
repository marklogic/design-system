import React from 'react'
import { Descriptions } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLDescriptions = (props) => {
  return (
    <Descriptions
      {...props}
      className={classNames('ml-descriptions', props.className)}
    >
      {props.children}
    </Descriptions>
  )
}

MLDescriptions.defaultProps = {
  size: 'small',
  colon: false,
}

MLDescriptions.propTypes = {
  /** The title of the description list, placed at the top */
  title: PropTypes.node,
  /** whether to display the border */
  bordered: PropTypes.bool,
  /** the number of DescriptionItems in a row,could be a number or a object like { xs: 8, sm: 16, md: 24},(Only set bordered={true} to take effect) */
  column: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  /** set the size of the list. Can be set to middle,small, or not filled */
  size: PropTypes.oneOf(['default', 'middle', 'small']),
  /** Define description layout */
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  /** change default props colon value of Descriptions.Item */
  colon: PropTypes.bool,
}

export default MLDescriptions
