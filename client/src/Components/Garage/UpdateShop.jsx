import React from "react";
import { useEffect, useState } from "react";
import { DatePicker, Space} from "antd";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AutoComplete, Button, Form, Input, Select } from "antd";
const { Option } = Select;

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
const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

const onChange = (date, dateString, e) => {
  console.log(date, dateString);
  
};

const onChange1 = (date, dateString, e) => {
  console.log(date, dateString);
 
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




function  UpdateShop() {
  
  const {shop_id } = useParams();
   console.log("Update",shop_id);
   const [form] = Form.useForm();
   const [autoCompleteResult, setAutoCompleteResult] = useState([]);

   const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  


   
  const navigate = useNavigate();
  const [data1, setData] = useState({
        shop_registration:"",
        shop_name:"",
        address:"",
        state:"",
        city:"",
        pin:"",
        shop_owner_mobile_no:"",
        mobile_no:"",
        email:"",
        website:"",
        shop_owner_name:"",
        est_year:"",
        service_type:"",
        other_remark:"",
        password:"",
        reg_on:"",
  });


  const Inputhandlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setData({
      ...data1,
      [name]: value,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    getuser();
    updateData();
    navigate(`/viewshop`);
  };
  
  const updateData = async () => {
    const Response = await Axios.put(
      `http://localhost:4000/editshop/${shop_id}`,
       data1
    );
    console.log("data", Response);
  };


  const getuser = async () => {
    const res = await Axios.get(
      `http://localhost:4000/getshopbyid/${shop_id}`
    );

    const oldData = res.data[0];
    console.log("get shop by id",oldData);
    console.log("Pavan",data1.address);
    setData(oldData);
  };
 

  useEffect(() => {
    getuser();
  }, []);

  

  

  return (
    <>
      <div stle={{backgroundColor: "transparent"}}>
      <h1 style={{ textAlign: "center", fontWeight: "bold",marginTop: "-15px"}}>
        Edit Shop
      </h1>
     
      <Form
          autoComplete="off"
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
          
        >
          <Input
         
              onChange={Inputhandlechange}
          
              value={data1.shop_name}
          />
        </Form.Item>

        <Form.Item
          name="reg_no"
          label="Shop Registration Number :"
          
        >
          <Input
         
            onChange={Inputhandlechange}
          
              value={data1.shop_registration}
                        />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          
        >
          <Input.Password
    
            onChange={Inputhandlechange}
              name="password"
              value={data1.password}
          />
        </Form.Item>

      
        <Form.Item
          name="address"
          label="Address:"
          
        >
          <Input
           value={data1.address}
            onChange={Inputhandlechange}
              name="address"
              />
        </Form.Item>

        <Form.Item
          name="state"
          label="State:"
          
        >
          <Input
           
            onChange={Inputhandlechange}
              name="state"
              value={data1.state}
          />
        </Form.Item>

        <Form.Item
          name="city"
          label="City:"
          
        >
          <Input
          
            onChange={Inputhandlechange}
              name="city"
              value={data1.city}
          />
        </Form.Item>

        <Form.Item
          name="pin"
          label="Pin/Zip Code:"
          
        >
          <Input
        
            onChange={Inputhandlechange}
              name="pin"
              value={data1.pin}         
               />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          
        >
          <Input
           
            onChange={Inputhandlechange}
              name="email"
              value={data1.email}
          />
        </Form.Item>

        <Form.Item
          name="website"
          label="Website"
          
        >
          <AutoComplete options={websiteOptions} onChange={onWebsiteChange}>
            <Input
          
              onChange={Inputhandlechange}
              name="website"
              value={data1.website}
            />
          </AutoComplete>
        </Form.Item>

        <Form.Item
          name="owner name"
          label="Owner Name:"
          
        >
          <Input
   
            onChange={Inputhandlechange}
              name="name"
              value={data1.shop_owner_name}
          />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number:"
         
        >
          <Input
            max={10}
            onChange={Inputhandlechange}
              name="mobile"
              value={data1.shop_owner_mobile_no}
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          name="date"
          label="Established On:"
          rules={[
            {
              required: true,
              message: "Please select date!",
            },
          ]}
        >
          <Space direction="vertical">
            <DatePicker onChange={onChange} />
          </Space>
        </Form.Item>

        <Form.Item
          name="service type"
          label="Service Type:"
         
        >
          <Input
          
            onChange={Inputhandlechange}
              name="servicetype"
              value={data1.service_type}
          />
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
          name="phone"
          label="Shop Phone Number:"
         
        >
          <Input
            max={10}
            onChange={Inputhandlechange}
              name="phoneno"
              value={data1.mobile_no}
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          name="date"
          label="Registred On:"
          
        >
          <Space direction="vertical">
            <DatePicker onChange={onChange1} />
          </Space>
        </Form.Item>

        <Form.Item
          name="intro"
          label="Other Remark:"
         
        >
          <Input.TextArea
            showCount
            maxLength={100}
            onChange={Inputhandlechange}
              name="otherremark"
              value={data1.other_remark}
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onClick={submitHandle} >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
    </>
     
  );
};
  
 
export default UpdateShop;
