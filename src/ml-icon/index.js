import React from 'react'
import AntIcons from './ant-icons'
import FontAwesomeIcons from './font-awesome-icons'
import createReactClass from 'create-react-class'
import '../ml-icon.less'

// TODO: Handle coloration of individual icons

// Wraper for the Icon components to add custom prop behavior
function MLIconWrapper({ highlight, component, ...props }) {
  let className = ''
  if (highlight) {
    className = [props.className, 'ml-icon-highlight'].join(' ')
  }
  return React.createElement(component, Object.assign({}, { className }, props))
}

const AntIconsWrapped = {}
const FontAwesomeIconsWrapped = {}

// Create a wrapped version of every Icon component
for (const [iconSet, iconSetWrapped] of [[AntIcons, AntIconsWrapped], [FontAwesomeIcons, FontAwesomeIconsWrapped]]) {
  for (const [componentName, component] of Object.entries(iconSet)) {
    iconSetWrapped[componentName] = createReactClass({
      displayName: componentName,
      render: function() {
        return (<MLIconWrapper {...this.props} component={component} />)
      },
    })
  }
}

// Combine them into one set of icons for normal use
const MLIcon = Object.assign({},
  AntIconsWrapped,
  FontAwesomeIconsWrapped,
)

export default MLIcon

// Export them separately in case you need them separately (like for storybook)
export {
  AntIconsWrapped as AntIcons,
  FontAwesomeIconsWrapped as FontAwesomeIcons,
}
