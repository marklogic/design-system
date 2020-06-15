import MLTooltip from './MLTooltip'
import PropTypes from 'prop-types'

export const AbstractTooltipProps = {
  /** Whether the arrow is pointed at the center of target */
  arrowPointAtCenter: PropTypes.bool,
  /** Whether to adjust popup placement automatically when popup is off screen */
  autoAdjustOverflow: PropTypes.bool,
  /** Whether the floating tooltip card is visible by default */
  defaultVisible: PropTypes.bool,
  /** The DOM container of the tip, the default behavior is to create a div element in body */
  getPopupContainer: PropTypes.func,
  /** Delay in seconds, before tooltip is shown on mouse enter */
  mouseEnterDelay: PropTypes.number,
  /** Delay in seconds, before tooltip is hidden on mouse leave */
  mouseLeaveDelay: PropTypes.number,
  /** Class name of the tooltip card */
  overlayClassName: PropTypes.string,
  /** Style of the tooltip card */
  overlayStyle: PropTypes.object,
  /** The position of the tooltip relative to the target, which can be one of top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom */
  placement: PropTypes.string,
  /** Tooltip trigger mode. Could be multiple by passing an array */
  trigger: PropTypes.oneOfType([PropTypes.oneOf(['hover', 'focus', 'click', 'contextMenu']), PropTypes.arrayOf(PropTypes.string)]),
  /** Whether the floating tooltip card is visible or not */
  visible: PropTypes.bool,
  /** Callback executed when visibility of the tooltip card is changed */
  onVisibleChange: PropTypes.func,
  /** this value will be merged into placement's config, please refer to the settings rc-tooltip */
  align: PropTypes.object,
}

export default MLTooltip
