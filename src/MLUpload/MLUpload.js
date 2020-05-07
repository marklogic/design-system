import React from 'react'
import PropTypes from 'prop-types'
import { Upload } from 'antd'

const MLUpload = (props) => {
  return (
    <Upload {...props}>
      {props.children}
    </Upload>
  )
}

export default MLUpload
