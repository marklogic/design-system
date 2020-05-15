import React from 'react'
import { MLHeader } from '@marklogic/design-system'
import { Route as RouteIcon, SearchOutlined, QuestionCircleOutlined, SettingOutlined, UserOutlined } from '@marklogic/design-system/MLIcon'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Avatar as MLAvatar } from 'antd' // TODO: Use MLAvatar once it exists

export default {
  title: 'Navigation/MLHeader',
  component: MLHeader,
  decorators: [withKnobs],
}

export const Basic = () => {
  function makeIcon(icon, title) {
    return <a href={`#${title}`} title={title} key={title}>{icon}</a>
  }
  return (
    <MLHeader
      title={text('title', 'Data Hub Central')}
      avatar={
        <a href='#'>
          <MLAvatar
            src={text('project avatar url', 'https://www.marklogic.com/wp-content/themes/marklogic-bs4/resources/favicons/favicon-32x32.png')}
            size={48}
          />
        </a>
      }
      extra={[
        makeIcon(<RouteIcon />, 'route'),
        <span key='divider' style={{ 'border-left': '1px dashed' }} />,
        makeIcon(<SearchOutlined />, 'search'),
        makeIcon(<QuestionCircleOutlined />, 'help'),
        makeIcon(<SettingOutlined />, 'settings'),
        makeIcon(<UserOutlined />, 'user'),
      ]}
    />
  )
}
