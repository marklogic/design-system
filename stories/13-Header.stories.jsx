import React from 'react'
import { MLHeader, MLTooltip, MLLayout, MLAvatar } from '@marklogic/design-system'
import RouteSolid from '../src/MLIcon/RouteSolid'
import SearchOutlined from '../src/MLIcon/SearchOutlined'
import QuestionCircleOutlined from '../src/MLIcon/QuestionCircleOutlined'
import SettingOutlined from '../src/MLIcon/SettingOutlined'
import UserOutlined from '../src/MLIcon/UserOutlined'
import { withKnobs, text } from '@storybook/addon-knobs'
import mdx from './13-Header.mdx'

export default {
  title: 'Navigation/MLHeader',
  component: MLHeader,
  decorators: [withKnobs],
  description: 'Unlike the other components in this library, this component is not based on any Ant component.',
  parameters: {
    fileName: '13-Header.stories.jsx',
    docs: {
      page: mdx,
    },
  }
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
