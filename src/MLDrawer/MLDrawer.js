import React from 'react'
import { Drawer } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MLDrawer = React.forwardRef((props, ref) => {
  return (
    <Drawer
      ref={ref}
      {...props}
      className={classNames('ml-drawer', props.className)}
    >
      {props.children}
    </Drawer>
  )
})

MLDrawer.defaultProps = {
}

MLDrawer.propTypes = {
  /** Whether a close (x) button is visible on top right of the Drawer dialog or not. */
  closable: PropTypes.bool,
  /** Whether to unmount child components on closing drawer or not. */
  destroyOnClose: PropTypes.bool,
  /** Return the mounted node for Drawer. */
  getContainer: PropTypes.any,
  /** Whether to show mask or not. */
  mask: PropTypes.bool,
  /** Clicking on the mask (area outside the Drawer) to close the Drawer or not. */
  maskClosable: PropTypes.bool,
  /** Style for Drawer's mask element. */
  maskStyle: PropTypes.object,
  /** Style of wrapper element which contains mask compare to drawerStyle */
  style: PropTypes.object,
  /** Style of the popup layer element */
  drawerStyle: PropTypes.object,
  /** Style of the drawer header part */
  headerStyle: PropTypes.object,
  /** Style of the drawer content part */
  bodyStyle: PropTypes.object,
  /** The title for Drawer. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Whether the Drawer dialog is visible or not. */
  visible: PropTypes.bool,
  /** Width of the Drawer dialog. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** placement is top or bottom, height of the Drawer dialog. */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The class name of the container of the Drawer dialog. */
  className: PropTypes.string,
  /** The z-index of the Drawer. */
  zIndex: PropTypes.number,
  /** The placement of the Drawer. */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** Specify a callback that will be called when a user clicks mask, close button or Cancel button. */
  onClose: PropTypes.func,
  /** Callback after the animation ends when switching drawers. */
  afterVisibleChange: PropTypes.func,
  /** Whether support press esc to close */
  keyboard: PropTypes.bool,
}

MLDrawer.displayName = 'MLDrawer'

export default MLDrawer
