import React, { Component } from 'react'

import {
  MLAnchor,
  MLHeader,
  MLTooltip,
  MLButton,
  MLDatePicker,
  MLLayout,
  MLSlider,
  MLConfigProvider,
  MLPopover,
  MLResult,
  MLEditableSlider,
  MLEmpty,
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
            <MLLayout.MLHeader style={{ padding: 0, position: 'fixed', zIndex: 2, width: '100%' }}>
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
              <MLDatePicker picker='week' />
              <MLDatePicker size='small' />
              <MLDatePicker size='default' />
              <MLDatePicker size='large' />
              <MLDatePicker picker='week' />
              <div style={{ height: 100 }}>Some short content</div>
              <MLPopover
                arrowPointAtCenter
                content={<div><p>Content</p><p>Content</p></div>}
                placement='top'
                title='Title'
                trigger={[
                  'hover',
                  'focus',
                ]}
              >
                <MLButton
                  style={{ marginLeft: '100px' }}
                  size='small'
                  type='primary'
                >
                  Hover me
                </MLButton>
              </MLPopover>
              <MLResult type='primary' icon={<RouteIcon />} title='title' subTitle='subtitle' />
              <MLEmpty />
              <div
                style={{
                  width: '400px',
                }}
              >
                <MLEditableSlider
                  debounceTime={200}
                  defaultValue={0}
                  max={100}
                  min={0}
                  onChange={(v) => console.log(v)}
                />
                <MLEditableSlider
                  debounceTime={200}
                  defaultValue={[
                    20,
                    70,
                  ]}
                  max={100}
                  min={0}
                  range
                  onChange={(v) => console.log(v)}
                />
              </div>
              <div>
                <div style={{ position: 'absolute', right: '50px' }}>
                  <MLAnchor offsetTop={88}>
                    <MLAnchor.MLLink href='#anchor-1' title='Link 1' />
                    <MLAnchor.MLLink href='#anchor-2' title='Link 2' />
                    <MLAnchor.MLLink href='#anchor-3' title='Link 3 with _target' target='_blank' />
                    <MLAnchor.MLLink href='#anchor-4' title='Link 4'>
                      <MLAnchor.MLLink href='#anchor-5' title='Link 5' />
                      <MLAnchor.MLLink href='#anchor-6' title='Link 6' />
                    </MLAnchor.MLLink>
                    <MLAnchor.MLLink href='#anchor-7' title='Link 7' />
                  </MLAnchor>
                </div>
                <div id='anchor-1'>anchor-1</div>
                <div id='anchor-2' style={{ height: '500px' }}>anchor-2</div>
                <div id='anchor-3' style={{ height: '500px' }}>anchor-3</div>
                <div id='anchor-4' style={{ height: '500px' }}>
                  anchor-4
                  <div id='anchor-5' style={{ height: '200px' }}>anchor-5</div>
                  <div id='anchor-6' style={{ height: '200px' }}>anchor-6</div>
                </div>
                <div id='anchor-7' style={{ height: '500px' }}>anchor-7</div>
              </div>
              <div style={{ height: 2000 }}>Some tall content</div>
            </MLLayout.MLContent>
            <MLLayout.MLFooter year='2019' />
          </MLLayout>
        </MLConfigProvider>
      </div>
    )
  }
}
