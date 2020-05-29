import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import {
  MLForm,
  MLInput,
  MLButton,
  MLAutoComplete,
  MLRow,
  MLCol,
  MLCheckbox,
  MLSelect,
  MLTooltip,
  // MLCascader,
} from '@marklogic/design-system'
import { QuestionCircleOutlined } from '@marklogic/design-system/MLIcon'

import {
  Cascader as MLCascader,
} from 'antd'

export default {
  title: 'Data Entry/MLForm',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'See Ant documentation for source code; it is too complex to display usefully here.',
    },
  },
}

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
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  };

  handleConfirmBlur = e => {
    const { value } = e.target
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  };

  handleWebsiteChange = value => {
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
        <MLForm.MLItem label='Password' hasFeedback>
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
        <MLForm.MLItem label='Confirm Password' hasFeedback>
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

const WrappedRegistrationForm = MLForm.create({ name: 'register' })(RegistrationForm)

export const basic = () => {
  return (
    <WrappedRegistrationForm />
  )
}
