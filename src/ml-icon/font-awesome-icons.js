import React from 'react'
import Icon from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FontAwesomeOriginalIcons from '@fortawesome/free-solid-svg-icons'
import { config as FontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'

const FontAwesomeIcons = {}

for (const [key, value] of Object.entries(FontAwesomeOriginalIcons)) {
  if (key === 'fas') {
    continue
  }
  if (key.slice(0, 2) === FontAwesomeConfig.familyPrefix) {
    const componentName = key.slice(2)
    Object.defineProperty(FontAwesomeIcons, componentName, {
      enumerable: true,
      get: function get() {
        const componentFn = (props) => {
          return (
            <Icon
              {...props}
              component={(props) => (
                <FontAwesomeIcon icon={value} {...props} />
              )}
            />
          )
        }
        componentFn.displayName = componentName
        return componentFn
      },
    })
  }
}

// TODO: Consider giving these a more explicit enumerated export structure so editors can find them for importing

export default FontAwesomeIcons
