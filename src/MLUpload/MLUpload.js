import React from 'react'
import PropTypes from 'prop-types'
import { Upload } from 'antd'
import classNames from 'classnames'

const MLUpload = React.forwardRef((props, ref) => {
  return (
    <Upload
      ref={ref}
      {...props}
      className={classNames('ml-upload', props.className)}
    >
      {props.children}
    </Upload>
  )
})

export default MLUpload
