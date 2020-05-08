import React from 'react'
import Icon from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function MLIconWrapper({ highlight, color, displayName, component, ...props }) {
  let className = ''
  if (highlight) {
    className = [props.className, 'ml-icon-highlight'].join(' ')
  }
  if (/Outlined$/.test(displayName)) {
    className = [props.className, 'ml-icon-outlined'].join(' ')
  }
  if (/Filled$/.test(displayName)) {
    className = [props.className, 'ml-icon-filled'].join(' ')
  }
  if (/TwoTone$/.test(displayName)) {
    className = [props.className, 'ml-icon-two-toned'].join(' ')
  }
  className = className.replace('^ +', '')
  return React.createElement(component, Object.assign({}, props, { className }))
}

export const createWrappedMLIcon = (component) => {
  const displayName = component.displayName || component.render.displayName // go through render if it's a forwardRef object
  const wrappedComponent = (props) => {
    return (<MLIconWrapper {...props} displayName={displayName} component={component} />)
  }
  wrappedComponent.displayName = displayName
  // TODO: Consider using React.forwardRef here like Ant does
  return wrappedComponent
}
