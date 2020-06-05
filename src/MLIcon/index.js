import MLIcon from './MLIcon'

import * as FontAwesomeSolidIcons from './font-awesome-solid-icons'
import * as FontAwesomeRegularIcons from './font-awesome-regular-icons'
import * as AntIcons from './ant-icons'

export * from './font-awesome-regular-icons'
export * from './font-awesome-solid-icons'
export * from './ant-icons'

Object.assign(MLIcon, FontAwesomeSolidIcons, FontAwesomeRegularIcons, AntIcons)

export default MLIcon

console.warn("WARNING: Every Ant and FontAwesome icon is being imported. Make sure you're importing icons directly to avoid a large bundle size.\n" +
  "eg `import { CheckCircleFilled } from '@marklogic/design-system/MLIcon'`\n" +
  " with the proper babel-import-plugin configured for `@marklogic/design-system/MLIcon`. (See Playground's config-overrides for an example)")
