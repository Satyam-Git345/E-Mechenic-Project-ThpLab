import React, { useState } from 'react';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
const { Option } = Select;

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
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
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
};
const Add_shop = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+91</Option>
        <Option value="87">+87</Option>
        <Option value="87">+92</Option>
        <Option value="87">+89</Option>
      </Select>
    </Form.Item>
  );
  
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));



  return (
    <div>
      <h1 style={{textAlign: 'center', fontWeight:'bold'}}>Register New Shop</h1>
      

    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >

       <Form.Item
        name="shop_name"
        label="Shop Name"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid Shop Name',
          },
          {
            required: true,
            message: 'Please input your Shop Name!',
           
          },
          {min:5}
        ]}
      >
        <Input   placeholder="Enter your shop name"/>
      </Form.Item>
      <Form.Item
        name="reg_no"
        label="Shop Registration Number :"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid Shop Registration Number :',
          },
          {
            required: true,
            message: 'Please input your Shop Registration Number!',
           
          },
          {min:10}
        ]}
      >
        <Input />
      </Form.Item>

      

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>


      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >

        <Input.Password />
      </Form.Item>


      <Form.Item
        name="address"
        label="Address:"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid address',
          },
          {
            required: true,
            message: 'Please input your Address!',
           
          },
          {min:5}
        ]}
      >
        <Input />
      </Form.Item>

      
      <Form.Item
        name="state"
        label="State:"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid state',
          },
          {
            required: true,
            message: 'Please input your state!',
           
          },
          {min:5}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="city"
        label="City:"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid city',
          },
          {
            required: true,
            message: 'Please input your city!',
           
          },
          {min:5}
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="pin"
        label="Pin/Zip Code:"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid pin',
          },
          {
            required: true,
            message: 'Please input your pin!',
           
          },
          {min:5}
        ]}
      >
        <Input />
      </Form.Item>


      {/* <Form.Item label="Phone Number">
            {getFieldDecorator('phone', {
              rules: [
                { 
                  required: true, 
                  message: 'Please input your phone number!' 
                },
              {
                validator: this.validateMobileNumber,
              },
            ],
            })
            (<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
          </Form.Item> */}


      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      
      
      <Form.Item
        name="website"
        label="Website"
        rules={[
          {
            type:'url',
            required: true,
            message: 'Please input website!',
          },
        ]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
          <Input />
        </AutoComplete>
      </Form.Item>

      
      <Form.Item
        name="owner name"
        label="Owner Name:"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid Owner Name',
          },
          {
            required: true,
            message: 'Please input your Name!',
           
          },
          {min:5}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
export default Add_shop;