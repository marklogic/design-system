import { Select } from 'antd'
const { Option } = Select

// NOTE: The Option and OptGroup are extensions of their base class to work around
// Ant checking for the types of MLSelect's children to be only Option or OptGroup
class MLOption extends Option {}

MLOption.defaultProps = {}
MLOption.propTypes = {}

MLOption.displayName = 'MLSelect.MLOption'

export default MLOption
