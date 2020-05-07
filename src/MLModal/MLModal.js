import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'

const MLModal = (props) => {
  return (
    <Modal {...props}>{props.children}</Modal>
  )
}

MLModal.propTypes = {
  children: PropTypes.node,
}

MLModal.defaultProps = {
}

export default MLModal
