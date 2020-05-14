import { Select } from 'antd'
import classNames from 'classnames'
const { Option } = Select

// NOTE: The Option and OptGroup are extensions of their base class to work around
// Ant checking for the types of MLSelect's children to be only Option or OptGroup
class MLOption extends Option {}

MLOption.defaultProps = {}
MLOption.propTypes = {}

export default MLOption
