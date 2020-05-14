import * as FontAwesomeIcons from './font-awesome-icons'
import * as AntIcons from './ant-icons'

export * from './font-awesome-icons'
export * from './ant-icons'

const MLIcon = {}
Object.assign(MLIcon, FontAwesomeIcons, AntIcons)

export default MLIcon

console.warn("WARNING: Every Ant and FontAwesome icon is being imported. Make sure you're importing icons correctly to avoid a large bundle size.\n" +
  "eg `import { CheckCircleFilled } from '@marklogic/design-system/MLIcon'`\n" +
  " with the proper babel")
