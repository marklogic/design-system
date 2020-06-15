import MLIcon from './MLIcon'

import * as FontAwesomeSolidIcons from './font-awesome-solid-icons'
import * as FontAwesomeRegularIcons from './font-awesome-regular-icons'
import * as FontAwesomeBrandIcons from './font-awesome-brand-icons'
import * as AntIcons from './ant-icons'

export * from './font-awesome-regular-icons'
export * from './font-awesome-solid-icons'
export * from './font-awesome-brand-icons'
export * from './ant-icons'

Object.assign(
  MLIcon,
  FontAwesomeSolidIcons,
  FontAwesomeRegularIcons,
  FontAwesomeBrandIcons,
  AntIcons,
)

export default MLIcon

if (!process || !process.env || process.env.NODE_ENV !== 'test') {
  // Don't warn in Node (or Jest), just the browser
  console.warn("WARNING: Every Ant and FontAwesome icon is being imported. Make sure you're importing icons directly to avoid a large bundle size.\n" +
    "eg `import { CheckCircleFilled } from '@marklogic/design-system/es/MLIcon'`\n" +
    " with the proper babel-import-plugin configured for `@marklogic/design-system/es/MLIcon`. (See Playground's config-overrides for an example)")
}
