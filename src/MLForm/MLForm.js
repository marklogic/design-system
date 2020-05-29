import React from 'react'
import { Form } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLForm = React.forwardRef((props, ref) => {
  return (
    <Form
      ref={ref}
      {...props}
      className={classNames('ml-form', props.className)}
    >
      {props.children}
    </Form>
  )
})

MLForm.defaultProps = {
  colon: true,
}

MLForm.propTypes = {
}

MLForm.create = Form.create
MLForm.createFormField = Form.createFormField

export default MLForm
