import MLIcon from './MLIcon'

import * as FontAwesomeIcons from './font-awesome-icons'
import * as AntIcons from './ant-icons'

export * from './font-awesome-icons'
export * from './ant-icons'

Object.assign(MLIcon, FontAwesomeIcons, AntIcons)

export default MLIcon

console.warn("WARNING: Every Ant and FontAwesome icon is being imported. Make sure you're importing icons directly to avoid a large bundle size.\n" +
  "eg `import { CheckCircleFilled } from '@marklogic/design-system/MLIcon'`\n" +
  " with the proper babel-import-plugin configured for `@marklogic/design-system/MLIcon`. (See Playground's config-overrides for an example)")
