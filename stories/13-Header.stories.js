import React from 'react'
import { MLHeader, MLTooltip, MLLayout } from '@marklogic/design-system'
import { RouteSolid, SearchOutlined, QuestionCircleOutlined, SettingOutlined, UserOutlined } from '@marklogic/design-system/MLIcon'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Avatar as MLAvatar } from 'antd' // TODO: Use MLAvatar once it exists

export default {
  title: 'Navigation/MLHeader',
  component: MLHeader,
  decorators: [withKnobs],
  description: 'Unlike the other components in this library, this component is not based on any Ant component.',
}

export const Basic = () => {
  function makeIcon(icon, title) {
    return (
      <MLTooltip
        title={title}
        placement='bottom'
        key={title}
      >
        <a href={`#${title}`}>
          {icon}
        </a>
      </MLTooltip>
    )
  }
  return (
    <div>
      <MLHeader
        title={text('title', 'Data Hub Central')}
        avatar={
          <a href='#'>
            <MLAvatar
              src={text('project avatar url', 'https://www.marklogic.com/wp-content/themes/marklogic-bs4/resources/favicons/favicon-32x32.png')}
              style={{ backgroundColor: 'white' }} // Because the given src has transparent background
              size={48}
            />
          </a>
        }
        extra={[
          makeIcon(<RouteSolid />, 'route'),
          <span key='divider' style={{ borderLeft: '1px dashed' }} />,
          makeIcon(<SearchOutlined />, 'search'),
          makeIcon(<QuestionCircleOutlined />, 'help'),
          makeIcon(<SettingOutlined />, 'settings'),
          makeIcon(<UserOutlined />, 'user'),
        ]}
      />
      (Here's some other content that shouldn't be covered up)
    </div>
  )
}
