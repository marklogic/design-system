import React, { Component } from 'react'

import {
  MLHeader,
  MLTooltip,
  MLButton,
  MLDatePicker,
  MLLayout,
  MLSlider,
  MLConfigProvider,
} from '@marklogic/design-system'

import {
  Route as RouteIcon,
  CheckCircleFilled,
  SearchOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined,
} from '@marklogic/design-system/MLIcon'
import { text } from '@storybook/addon-knobs'
import { Avatar as MLAvatar } from 'antd'

const configValues = {
  dateFormat: 'YYYY-MMM-DD', // Default for all dates, and DatePicker
  dateTimeFormat: 'YYYY-MMM-DD, HH:mm:ss', // default for all dates with times, and DatePicker with times
  monthFormat: 'YYYY-MM', // default for Month picker
  weekFormat: 'YYYY-wo', // default for Week picker
  yearFormat: 'YYYY', // default for Year picker
}

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

export default class App extends Component {
  render() {
    return (
      <div>
        <MLConfigProvider {...configValues}>
          <MLLayout>
            <MLLayout.MLHeader style={{ padding: 0, position: 'fixed', zIndex: 1, width: '100%' }}>
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
                  makeIcon(<RouteIcon />, 'route'),
                  <span key='divider' style={{ borderLeft: '1px dashed' }} />,
                  makeIcon(<SearchOutlined />, 'search'),
                  makeIcon(<QuestionCircleOutlined />, 'help'),
                  makeIcon(<SettingOutlined />, 'settings'),
                  makeIcon(<UserOutlined />, 'user'),
                ]}
              />
            </MLLayout.MLHeader>
            <MLLayout.MLContent style={{ marginTop: 64 }}>
              <MLButton type='primary'>Test</MLButton>
              <MLButton type='highlight'>Test</MLButton>
              <RouteIcon />
              <CheckCircleFilled />
              <div>
                <MLSlider tooltipPlacement='top' />
              </div>
              <MLDatePicker />
              <div style={{ height: 2000 }}>Some tall content</div>
            </MLLayout.MLContent>
            <MLDatePicker picker='week' />
            <MLLayout.MLFooter year='2019' />
          </MLLayout>
        </MLConfigProvider>
      </div>
    )
  }
}
