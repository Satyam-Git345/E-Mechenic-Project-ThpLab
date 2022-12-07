import React, { useState } from 'react';
// import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import {
  AutoComplete,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';
const { Option } = Select;


// const onChange: DatePickerProps['onChange'] = (date, dateString) => {
//   console.log(date, dateString);
// };

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
  const navigate = useNavigate();
  // const [form] = Form.useForm();
  
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };

  const [data, setData] = useState({
    shop_registration: "",
    shop_name: "",
    address: "",
    state: "",
    city: "",
    pin: "",
    mobile_no: "",
    email: "",
    website: "",
    shop_owner_name: "",
    shop_owner_mobile_no: "",
    est_year:"",
    service_type:"",
    other_remark:"",
    password: "",
    reg_on:"",
});

  // const Inputhandlechange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value);
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  // };

  // const postUser = async () => {
  //   const data1 = await fetch("http://localhost:4000/addshop", {
  //     method: "post",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(data)
  //   });
  //   console.log(data1);
  // };


  // const postUser = async () => {
  //  await fetch('http://localhost:4000/addshop', {

  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  //    .then((response) => response.json())
  //    .then((data) => {
  //       console.log(data);
  //       // Handle data
  //    })
  //    .catch((err) => {
  //       console.log(err.message);
  //    });
  //   }


  const postUser = async () => {
    const Response = await axios.post(
      "http://localhost:4000/addshop",
      data
    );
    console.log("data", Response);
    }


//  const postUser= async ()=>{
  //   axios.post(`https://localhost:4000/addshop`, { data })
  //   .then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   })
  //  }


  const submitHandle = (e) => {
    e.preventDefault();
    postUser();
    swal("Vehicle Category added successfully!","success");
    navigate("/viewshop");
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
      // {...formItemLayout}
      // form={form}
      // name="register"
      // onFinish={onFinish}
      // initialValues={{
      //   residence: ['zhejiang', 'hangzhou', 'xihu'],
      //   prefix: '86',
      // }}
      // scrollToFirstError
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
        <Input   placeholder="Enter your shop name"  
         onChange={(e) => {
          setCompanylogo(e.target.value);
        }}
         value={data.shop_name}/>
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
        <Input placeholder="Enter your Shop Registration Number name"   onChange={Inputhandlechange} 
         value={data.shop_registration}
        />
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
        <Input.Password placeholder="Enter your Passward"  value={data.password}   
        onChange={Inputhandlechange} />
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

        <Input.Password placeholder="Enter your password again"   onChange={Inputhandlechange}
         value={data.password}
        />
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
        <Input placeholder="Enter your address"   onChange={Inputhandlechange} value={data.address} />
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
        <Input placeholder="Enter your state"   onChange={Inputhandlechange}
        value={data.state}
        />
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
        <Input placeholder="Enter your city"   onChange={Inputhandlechange}
        value={data.city}
        />
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
        <Input placeholder="Enter your pin/zip code"  
        value={data.pin}
        onChange={Inputhandlechange}/>
      </Form.Item>



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
        <Input placeholder="Enter your email"  
        value={data.email}
        onChange={Inputhandlechange}/>
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
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange}>
          <Input placeholder="Enter your website url" 
          value={data.website}
          onChange={Inputhandlechange}/>
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
        <Input placeholder="Enter your name"  
        value={data.shop_owner_name}
        onChange={Inputhandlechange}/>
      </Form.Item>


      <Form.Item
        name="phone"
        label="Phone Number:"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <InputNumber  min={1} max={10} value={data.shop_owner_mobile_no} 
          onChange={Inputhandlechange}
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
      name="date"
      label="Established On:"
      rules={[
        {
          required: true,
          message: 'Please select date!',
        },
      ]}
      >
      <Space direction="vertical">
           <DatePicker onChange={Inputhandlechange} value={data.est_year} />
  
      </Space>
      </Form.Item>


      <Form.Item
        name="service type"
        label="Service Type:"
        rules={[
          {
            required: true,
            message: 'Please input service type!',
          },
        ]}
      >

        <Input placeholder="Enter Service Type" 
        value={data.service_type}
        onChange={Inputhandlechange}/>
      </Form.Item>


      {/* <Form.Item
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
      </Form.Item> */}

      

    <Form.Item
        name="intro"
        label="Other Remark:"
        rules={[
          {
            required: true,
            message: 'Please input other remark',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100}   
          value={data.other_remark}
        onChange={Inputhandlechange}/>
      </Form.Item>



      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={submitHandle} >
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};


export default Add_shop;

