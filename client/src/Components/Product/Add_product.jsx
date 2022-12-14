import React, { useState } from "react";
import swal from "sweetalert";
//import { useNavigate } from "react-router-dom";
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
const Add_product = () => {
  //const navigate = useNavigate();
  // const [form] = Form.useForm();
  // const [shop_registration, setShopreg] = useState("");
  // const [shop_name, setShopname] = useState("");
  // const [address, setShopaddress] = useState("");
  // const [state, setShopstate] = useState("");
  // const [city, setShopcity] = useState("");
  // const [email, setShopemail] = useState("");
  // const [website, setShopwebsite] = useState("");
  // const [shop_owner_name, setShopownername] = useState("");
  // const [shop_owner_mobile_no, setShopownermobile] = useState("");
  // const [mobile_no, setShopmono] = useState("");
  // const [pin, setShoppin] = useState("");
  // const [est_year, setShopestyear] = useState("");
  // const [service_type, setShopservicetype] = useState("");
  // const [other_remark, setShopotherremark] = useState("");
  // const [password, setShoppassward] = useState("");
  // const [reg_on, setShopregon] = useState("");

 

  
  // const setUser = () => {
  //   axios
  //     .post("http://localhost:4000/addshop", {
  //       shop_registration,
  //       shop_name,
  //       address,
  //       state,
  //       city,
  //       pin,
  //       shop_owner_mobile_no,
  //       mobile_no,
  //       email,
  //       website,
  //       shop_owner_name,
  //       est_year,
  //       service_type,
  //       other_remark,
  //       password,
  //       reg_on,
  //     })
  //     .then((response) => {
  //       // if(!response){
  //       //   swal("Good job!", "You clicked the button!", "error");
  //       // }
  //       // else{
  //       //   swal("Good job!", "You clicked the button!", "success");
  //       // }
  //       console.log(response);
  //     });
  // };

  // const submitHandle = (e) => {
  //   e.preventDefault();
  //   setUser();
  //   swal("Good job!", "Shop Added Sucessfully!", "success");
  //   navigate("/viewshop");
  // };

  

  
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
        Add New Product
      </h1>

      <Form
        autoComplete="off"
        {...formItemLayout}
        name="register"
        scrollToFirstError
      >
        <Form.Item
          name="product_name"
          label="Product Name"
          rules={[
            {
              type: "text",
              message: "The input is not valid Product Name",
            },
            {
              required: true,
              message: "Please input Product Name!",
            },
            { min: 5 },
          ]}
        >
          <Input
            placeholder="Enter product name"
            // onChange={(e) => {
            //   setShopname(e.target.value);
            // }}
            // value={shop_name}
          />
        </Form.Item>

        <Form.Item
          name="MRP"
          label="MRP"
          rules={[
            {
              type: "number",
              required: true,
              message: "Please input MRP!",
            },

            { min: 2 }
          ]}
        >
          <Input
            placeholder="Enter MRP"
            // onChange={(e) => {
            //   setShopname(e.target.value);
            // }}
            // value={shop_name}
          />
        </Form.Item>
        
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              type: "text",
              message: "The input is not valid description",
            },
            {
              required: true,
              message: "Please input description!",
            },
            { min: 5 },
          ]}
        >
          <Input
            placeholder="Enter description"
            // onChange={(e) => {
            //   setShopname(e.target.value);
            // }}
            // value={shop_name}
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

export default Add_product;
