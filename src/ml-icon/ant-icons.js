import * as AntIcons from '@ant-design/icons/lib/icons'

for (const [componentName, component] of Object.entries(AntIcons)) {
  component.displayName = componentName
}

export default AntIcons
