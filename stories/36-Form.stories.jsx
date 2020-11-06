/* eslint-disable react/prop-types */
import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, radios, optionsKnob as options, text } from '@storybook/addon-knobs'
import './36-Form.less'
import {
  MLTable,
  MLForm,
  MLInput,
  MLButton,
  MLAutoComplete,
  MLDatePicker,
  MLInputNumber,
  MLRow,
  MLCol,
  MLCheckbox,
  MLSelect,
  MLTooltip,
  MLUpload,
  MLSwitch,
  MLSlider,
  MLRadio,
  MLRate,
  // MLCascader,
} from '@marklogic/design-system'
import {
  QuestionCircleOutlined,
  UserOutlined,
  LockOutlined,
  InboxOutlined,
  UploadOutlined,
} from '../src/MLIcon'
import mdx from './36-Form.mdx'

import {
  Cascader as MLCascader,
  TimePicker as MLTimePicker,
} from 'antd'

export default {
  title: 'Form',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
    fileName: '36-Form.stories.jsx',
    info: {
      text: 'See Ant documentation for source code; it is too complex to display usefully here.',
    },
  },
}

export const basic = () => {
  const isInsideTable = boolean('simulate being inside MLTable cell', false)
  const label = text('label', 'Label text')
  // const hasFeedback = boolean('hasFeedback', false)
  const validateStatus = radios('validateStatus', ['success', 'warning', 'error', 'validating'], 'success')
  const help = text('help', 'Help text')
  const placeholder = text('placeholder', '')
  const formNode = (
    <MLForm {...formItemLayout}>
      <MLForm.MLItem
        label={label}
        // hasFeedback={hasFeedback}
        validateStatus={validateStatus}
        help={help}
      >
        <MLInput placeholder={placeholder} id='error' />
      </MLForm.MLItem>
    </MLForm>
  )
  if (isInsideTable) {
    return (
      <MLTable
        bordered
        columns={[
          {
            title: 'col1',
            key: 'col1',
            dataIndex: 'col1',
            render: () => (formNode),
          },
        ]}
        dataSource={[
          { col1: '' },
        ]}
      />
    )
  } else {
    return formNode
  }
}

/* Story 1 */

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disable submit button at the beginning.
    this.props.form.validateFields()
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username')
    const passwordError = isFieldTouched('password') && getFieldError('password')
    return (
      <MLForm layout='inline' onSubmit={this.handleSubmit}>
        <MLForm.MLItem validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <MLInput
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Username'
            />,
          )}
        </MLForm.MLItem>
        <MLForm.MLItem validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your MLPassword!' }],
          })(
            <MLInput
              prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='MLPassword'
            />,
          )}
        </MLForm.MLItem>
        <MLForm.MLItem>
          <MLButton type='primary' htmlType='submit' disabled={hasErrors(getFieldsError())}>
            Log in
          </MLButton>
        </MLForm.MLItem>
      </MLForm>
    )
  }
}

const WrappedHorizontalLoginForm = MLForm.create({ name: 'horizontal_login' })(HorizontalLoginForm)

export const horizontalLoginForm = () => <WrappedHorizontalLoginForm />

/* Story 2 */

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  };

  handleConfirmBlur(e) {
    const { value } = e.target
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  };

  compareToFirstPassword(rule, value, callback) {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  };

  validateToNextPassword(rule, value, callback) {
    const { form } = this.props
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  };

  handleWebsiteChange(value) {
    let autoCompleteResult
    if (!value) {
      autoCompleteResult = []
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`)
    }
    this.setState({ autoCompleteResult })
  };

  render() {
    const { getFieldDecorator } = this.props.form
    const { autoCompleteResult } = this.state

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <MLSelect style={{ width: 70 }}>
        <MLSelect.MLOption value='86'>+86</MLSelect.MLOption>
        <MLSelect.MLOption value='87'>+87</MLSelect.MLOption>
      </MLSelect>,
    )

    const websiteOptions = autoCompleteResult.map(website => (
      <MLAutoComplete.MLOption key={website}>{website}</MLAutoComplete.MLOption>
    ))

    return (
      <MLForm {...formItemLayout} onSubmit={this.handleSubmit}>
        <MLForm.MLItem label='E-mail'>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<MLInput />)}
        </MLForm.MLItem>
        <MLForm.MLItem label='MLPassword' hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<MLInput.MLPassword />)}
        </MLForm.MLItem>
        <MLForm.MLItem label='Confirm MLPassword' hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<MLInput.MLPassword onBlur={this.handleConfirmBlur} />)}
        </MLForm.MLItem>
        <MLForm.MLItem
          label={
            <span>
              Nickname&nbsp;
              <MLTooltip title='What do you want others to call you?'>
                <QuestionCircleOutlined style={{ color: 'black' }} />
              </MLTooltip>
            </span>
          }
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(<MLInput />)}
        </MLForm.MLItem>
        <MLForm.MLItem label='Habitual Residence'>
          {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [
              { type: 'array', required: true, message: 'Please select your habitual residence!' },
            ],
          })(<MLCascader options={residences} />)}
        </MLForm.MLItem>
        <MLForm.MLItem label='Phone Number'>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<MLInput addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </MLForm.MLItem>
        <MLForm.MLItem label='Website'>
          {getFieldDecorator('website', {
            rules: [{ required: false, message: 'Please input website!' }],
          })(
            <MLAutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder='website'
            >
              <MLInput />
            </MLAutoComplete>,
          )}
        </MLForm.MLItem>
        <MLForm.MLItem label='Captcha' extra='We must make sure that your are a human.'>
          <MLRow gutter={8}>
            <MLCol span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(<MLInput />)}
            </MLCol>
            <MLCol span={12}>
              <MLButton>Get captcha</MLButton>
            </MLCol>
          </MLRow>
        </MLForm.MLItem>
        <MLForm.MLItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <MLCheckbox>
              I have read the <a href=''>agreement</a>
            </MLCheckbox>,
          )}
        </MLForm.MLItem>
        <MLForm.MLItem {...tailFormItemLayout}>
          <MLButton type='primary' htmlType='submit'>
            Register
          </MLButton>
        </MLForm.MLItem>
      </MLForm>
    )
  }
}

const WrappedRegistration = MLForm.create({ name: 'register' })(RegistrationForm)
export const registration = () => (<WrappedRegistration />)

/* Story 3 */

class NormalLoginForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  };

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <MLForm onSubmit={this.handleSubmit} className='login-form'>
        <MLForm.MLItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <MLInput
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Username'
            />,
          )}
        </MLForm.MLItem>
        <MLForm.MLItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your MLPassword!' }],
          })(
            <MLInput
              prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='MLPassword'
            />,
          )}
        </MLForm.MLItem>
        <MLForm.MLItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<MLCheckbox>Remember me</MLCheckbox>)}
          <a className='login-form-forgot' href=''>
            Forgot password
          </a>
          <MLButton type='primary' htmlType='submit' className='login-form-button'>
            Log in
          </MLButton>
          Or <a href=''>register now!</a>
        </MLForm.MLItem>
      </MLForm>
    )
  }
}

const WrappedNormalLoginForm = MLForm.create({ name: 'normal_login' })(NormalLoginForm)
export const normalLoginForm = () => (
  <div id='components-form-demo-normal-login'>
    <WrappedNormalLoginForm />
  </div>
)

/* Story 4 */

class TimeRelatedForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker']
      const rangeTimeValue = fieldsValue['range-time-picker']
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker': [
          rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
          rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ],
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      }
      console.log('Received values of form: ', values)
    })
  };

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    }
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    }
    return (
      <MLForm {...formItemLayout} onSubmit={this.handleSubmit}>
        <MLForm.MLItem label='MLDatePicker'>
          {getFieldDecorator('date-picker', config)(<MLDatePicker />)}
        </MLForm.MLItem>
        <MLForm.MLItem label='MLDatePicker[showTime]'>
          {getFieldDecorator('date-time-picker', config)(
            <MLDatePicker showTime format='YYYY-MM-DD HH:mm:ss' />,
          )}
        </MLForm.MLItem>
        <MLForm.MLItem label='MLMonthPicker'>
          {getFieldDecorator('month-picker', config)(<MLDatePicker.MLMonthPicker />)}
        </MLForm.MLItem>
        <MLForm.MLItem label='MLRangePicker'>
          {getFieldDecorator('range-picker', rangeConfig)(<MLDatePicker.MLRangePicker />)}
        </MLForm.MLItem>
        <MLForm.MLItem label='MLRangePicker[showTime]'>
          {getFieldDecorator('range-time-picker', rangeConfig)(
            <MLDatePicker.MLRangePicker showTime format='YYYY-MM-DD HH:mm:ss' />,
          )}
        </MLForm.MLItem>
        <MLForm.MLItem label='MLTimePicker'>
          {getFieldDecorator('time-picker', config)(<MLTimePicker />)}
        </MLForm.MLItem>
        <MLForm.MLItem
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <MLButton type='primary' htmlType='submit'>
            Submit
          </MLButton>
        </MLForm.MLItem>
      </MLForm>
    )
  }
}

const WrappedTimeRelatedForm = MLForm.create({ name: 'time_related_controls' })(TimeRelatedForm)
export const timeRelatedForm = () => (<WrappedTimeRelatedForm />)

/* Story 5 */

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
}

/* Story 6 */

class Demo extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  };

  normFile(e) {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  };

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    return (
      <MLForm {...formItemLayout} onSubmit={this.handleSubmit}>
        <MLForm.MLItem label='Plain Text'>
          <span className='ant-form-text'>China</span>
        </MLForm.MLItem>
        <MLForm.MLItem label='Select' hasFeedback>
          {getFieldDecorator('select', {
            rules: [{ required: true, message: 'Please select your country!' }],
          })(
            <MLSelect placeholder='Please select a country'>
              <MLSelect.MLOption value='china'>China</MLSelect.MLOption>
              <MLSelect.MLOption value='usa'>U.S.A</MLSelect.MLOption>
            </MLSelect>,
          )}
        </MLForm.MLItem>

        <MLForm.MLItem label='Select[multiple]'>
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ],
          })(
            <MLSelect mode='multiple' placeholder='Please select favourite colors'>
              <MLSelect.MLOption value='red'>Red</MLSelect.MLOption>
              <MLSelect.MLOption value='green'>Green</MLSelect.MLOption>
              <MLSelect.MLOption value='blue'>Blue</MLSelect.MLOption>
            </MLSelect>,
          )}
        </MLForm.MLItem>

        <MLForm.MLItem label='InputNumber'>
          {getFieldDecorator('input-number', { initialValue: 3 })(<MLInputNumber min={1} max={10} />)}
          <span className='ant-form-text'> machines</span>
        </MLForm.MLItem>

        <MLForm.MLItem label='Switch'>
          {getFieldDecorator('switch', { valuePropName: 'checked' })(<MLSwitch />)}
        </MLForm.MLItem>

        <MLForm.MLItem label='Slider'>
          {getFieldDecorator('slider')(
            <MLSlider
              marks={{
                0: 'A',
                20: 'B',
                40: 'C',
                60: 'D',
                80: 'E',
                100: 'F',
              }}
            />,
          )}
        </MLForm.MLItem>

        <MLForm.MLItem label='MLRadio.MLGroup'>
          {getFieldDecorator('radio-group')(
            <MLRadio.MLGroup>
              <MLRadio value='a'>item 1</MLRadio>
              <MLRadio value='b'>item 2</MLRadio>
              <MLRadio value='c'>item 3</MLRadio>
            </MLRadio.MLGroup>,
          )}
        </MLForm.MLItem>

        <MLForm.MLItem label='MLRadio.MLButton'>
          {getFieldDecorator('radio-button')(
            <MLRadio.MLGroup>
              <MLRadio.MLButton value='a'>item 1</MLRadio.MLButton>
              <MLRadio.MLButton value='b'>item 2</MLRadio.MLButton>
              <MLRadio.MLButton value='c'>item 3</MLRadio.MLButton>
            </MLRadio.MLGroup>,
          )}
        </MLForm.MLItem>

        <MLForm.MLItem label='MLCheckbox.MLGroup'>
          {getFieldDecorator('checkbox-group', {
            initialValue: ['A', 'B'],
          })(
            <MLCheckbox.MLGroup style={{ width: '100%' }}>
              <MLRow>
                <MLCol span={8}>
                  <MLCheckbox value='A'>A</MLCheckbox>
                </MLCol>
                <MLCol span={8}>
                  <MLCheckbox disabled value='B'>
                    B
                  </MLCheckbox>
                </MLCol>
                <MLCol span={8}>
                  <MLCheckbox value='C'>C</MLCheckbox>
                </MLCol>
                <MLCol span={8}>
                  <MLCheckbox value='D'>D</MLCheckbox>
                </MLCol>
                <MLCol span={8}>
                  <MLCheckbox value='E'>E</MLCheckbox>
                </MLCol>
              </MLRow>
            </MLCheckbox.MLGroup>,
          )}
        </MLForm.MLItem>

        <MLForm.MLItem label='MLRate'>
          {getFieldDecorator('rate', {
            initialValue: 3.5,
          })(<MLRate />)}
        </MLForm.MLItem>

        <MLForm.MLItem label='MLUpload' extra='longgggggggggggggggggggggggggggggggggg'>
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <MLUpload name='logo' action='/upload.do' listType='picture'>
              <MLButton>
                <UploadOutlined /> Click to upload
              </MLButton>
            </MLUpload>,
          )}
        </MLForm.MLItem>

        <MLForm.MLItem label='Dragger'>
          {getFieldDecorator('dragger', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <MLUpload.MLDragger name='files' action='/upload.do'>
              <p className='ant-upload-drag-icon'>
                <InboxOutlined />
              </p>
              <p className='ant-upload-text'>Click or drag file to this area to upload</p>
              <p className='ant-upload-hint'>Support for a single or bulk upload.</p>
            </MLUpload.MLDragger>,
          )}
        </MLForm.MLItem>

        <MLForm.MLItem wrapperCol={{ span: 12, offset: 6 }}>
          <MLButton type='primary' htmlType='submit'>
            Submit
          </MLButton>
        </MLForm.MLItem>
      </MLForm>
    )
  }
}

const WrappedDemo = MLForm.create({ name: 'validate_other' })(Demo)
export const otherFormControls = () => <WrappedDemo />
