import { Select } from 'antd'
import classNames from 'classnames'
const { OptGroup } = Select

// NOTE: The Option and OptGroup are extensions of their base class to work around
// Ant checking for the types of MLSelect's children to be only Option or OptGroup
class MLOptGroup extends OptGroup {}

MLOptGroup.defaultProps = {}
MLOptGroup.propTypes = {}

export default MLOptGroup
