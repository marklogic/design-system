import { Select } from 'antd'
const { OptGroup } = Select

// NOTE: The Option and OptGroup are extensions of their base class to work around
// Ant checking for the types of MLSelect's children to be only Option or OptGroup
class MLOptGroup extends OptGroup {}

MLOptGroup.isSelectOptGroup = true

MLOptGroup.defaultProps = {}
MLOptGroup.propTypes = {}

MLOptGroup.displayName = 'MLSelect.MLOptGroup'

export default MLOptGroup
