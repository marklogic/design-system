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
}

MLCascader.propTypes = {
}

export default MLCascader
