import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
const Add_shop = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [shop_registration, setShopreg] = useState("");
  const [shop_name, setShopname] = useState("");
  const [address, setShopaddress] = useState("");
  const [state, setShopstate] = useState("");
  const [city, setShopcity] = useState("");
  const [email, setShopemail] = useState("");
  const [website, setShopwebsite] = useState("");
  const [shop_owner_name, setShopownername] = useState("");
  const [shop_owner_mobile_no, setShopownermobile] = useState("");
  const [mobile_no, setShopmono] = useState("");
  const [pin, setShoppin] = useState("");
  const [est_year, setShopestyear] = useState("");
  const [service_type, setShopservicetype] = useState("");
  const [other_remark, setShopotherremark] = useState("");
  const [password, setShoppassward] = useState("");
  const [reg_on, setShopregon] = useState("");

  // const onFinish = (values) => {
  //   console.log("Received values of form: ", values);
  // };

  const onChange = (date, dateString, e) => {
    console.log(date, dateString);
    setShopestyear(dateString);
  };

  const onChange1 = (date, dateString, e) => {
    console.log(date, dateString);
    setShopregon(dateString);
  };

  const setUser = () => {
    axios
      .post("http://localhost:4000/addshop", {
        shop_registration,
        shop_name,
        address,
        state,
        city,
        pin,
        shop_owner_mobile_no,
        mobile_no,
        email,
        website,
        shop_owner_name,
        est_year,
        service_type,
        other_remark,
        password,
        reg_on,
      })
      .then((response) => {
        // if(!response){
        //   swal("Good job!", "You clicked the button!", "error");
        // }
        // else{
        //   swal("Good job!", "You clicked the button!", "success");
        // }
        console.log(response);
      });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    setUser();
    swal("Good job!", "Shop Added Sucessfully!", "success");
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
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <div stle={{ backgroundColor: "transparent" }}>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "-15px",
          color: "green",
          fontFamily: "-moz-initial",
        }}
      >
        Add New Shop
      </h1>

      <Form onSubmit={()=>submitHandle()}
        autoComplete="off"
        {...formItemLayout}
        form={form}
        name="register"
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="shop_name"
          label="Shop Name"
          rules={[
            {
              type: "text",
              message: "The input is not valid Shop Name",
            },
            {
              required: true,
              message: "Please input your Shop Name!",
            },
            { min: 5 },
          ]}
        >
          <Input
            placeholder="Enter your shop name"
            onChange={(e) => {
              setShopname(e.target.value);
            }}
            value={shop_name}
          />
        </Form.Item>

        <Form.Item
          name="reg_no"
          label="Shop Registration Number :"
          rules={[
            {
              type: "text",
              message: "The input is not valid Shop Registration Number :",
            },
            {
              required: true,
              message: "Please input your Shop Registration Number!",
            },
            { min: 10 },
          ]}
        >
          <Input
            placeholder="Enter your Shop Registration Number name"
            onChange={(e) => {
              setShopreg(e.target.value);
            }}
            value={shop_registration}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Passward must be provided",
            },
            { whitespace: true },
            { min: 6 },
            {
              validator: (_, value) =>
                value && value.includes("A")
                  ? Promise.resolve()
                  : Promise.reject("Passward does not Matched Critriea"),
            },
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder="Enter your Passward"
            value={password}
            onChange={(e) => {
              setShoppassward(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Confirm Passward must be provided",
            },
            { min: 6 },
            { whitespace: true },

            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The Two Passwards You Have Entered Does Not Matched"
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Enter your password again" />
        </Form.Item>

        <Form.Item
          name="address"
          label="Address:"
          rules={[
            {
              type: "text",
              message: "The input is not valid address",
            },
            {
              required: true,
              message: "Please input your Address!",
            },
            { min: 5 },
          ]}
        >
          <Input
            placeholder="Enter your address"
            onChange={(e) => {
              setShopaddress(e.target.value);
            }}
            value={address}
          />
        </Form.Item>

        <Form.Item
          name="state"
          label="State:"
          rules={[
            {
              type: "text",
              message: "The input is not valid state",
            },
            {
              required: true,
              message: "Please input your state!",
            },
            { min: 5 },
          ]}
        >
          <Input
            placeholder="Enter your state"
            onChange={(e) => {
              setShopstate(e.target.value);
            }}
            value={state}
          />
        </Form.Item>

        <Form.Item
          name="city"
          label="City:"
          rules={[
            {
              type: "text",
              message: "The input is not valid city",
            },
            {
              required: true,
              message: "Please input your city!",
            },
            { min: 5 },
          ]}
        >
          <Input
            placeholder="Enter your city"
            onChange={(e) => {
              setShopcity(e.target.value);
            }}
            value={city}
          />
        </Form.Item>

        <Form.Item
          name="pin"
          label="Pin/Zip Code:"
          rules={[
            {
              type: "text",
              message: "The input is not valid pin",
            },
            {
              required: true,
              message: "Please input your pin!",
            },
            { min: 5 },
          ]}
        >
          <Input
            placeholder="Enter your pin/zip code"
            value={pin}
            onChange={(e) => {
              setShoppin(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setShopemail(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="website"
          label="Website"
          rules={[
            {
              type: "url",
              required: true,
              message: "Please input website!",
            },
          ]}
        >
          <AutoComplete options={websiteOptions} onChange={onWebsiteChange}>
            <Input
              placeholder="Enter your website url"
              value={website}
              onChange={(e) => {
                setShopwebsite(e.target.value);
              }}
            />
          </AutoComplete>
        </Form.Item>

        <Form.Item
          name="owner name"
          label="Owner Name:"
          rules={[
            {
              type: "text",
              message: "The input is not valid Owner Name",
            },
            {
              required: true,
              message: "Please input your Name!",
            },
            { min: 5 },
          ]}
        >
          <Input
            placeholder="Enter your name"
            value={shop_owner_name}
            onChange={(e) => {
              setShopownername(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="phone1"
          label="Phone Number:"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            max={10}
            value={shop_owner_mobile_no}
            onChange={(e) => {
              setShopownermobile(e.target.value);
            }}
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
          rules={[
            {
              required: true,
              message: "Please input service type!",
            },
          ]}
        >
          <Input
            placeholder="Enter Service Type"
            value={service_type}
            onChange={(e) => {
              setShopservicetype(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Shop Phone Number:"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            max={10}
            value={mobile_no}
            onChange={(e) => {
              setShopmono(e.target.value);
            }}
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          name="date"
          label="Registred On:"
          rules={[
            {
              required: true,
              message: "Please select date!",
            },
          ]}
        >
          <Space direction="vertical">
            <DatePicker onChange={onChange1} />
          </Space>
        </Form.Item>

        <Form.Item
          name="intro"
          label="Other Remark:"
          rules={[
            {
              required: true,
              message: "Please input other remark",
            },
          ]}
        >
          <Input.TextArea
            showCount
            maxLength={100}
            value={other_remark}
            onChange={(e) => {
              setShopotherremark(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Add_shop;
