import React from 'react'
import PropTypes from 'prop-types'
import { Upload } from 'antd'
import classNames from 'classnames'
const { Dragger } = Upload

const MLDragger = React.forwardRef((props, ref) => {
  return (
    <Dragger
      ref={ref}
      {...props}
      className={classNames('ml-upload-dragger', props.className)}
    >
      {props.children}
    </Dragger>
  )
})

MLDragger.propTypes = {
}

MLDragger.defaultProps = {
}

MLDragger.displayName = 'MLUpload.MLDragger'

export default MLDragger
