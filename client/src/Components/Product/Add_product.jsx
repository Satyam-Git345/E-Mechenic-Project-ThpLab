import React, { useState, useEffect } from "react";
import swal from "sweetalert";
//import { useNavigate } from "react-router-dom";
import axios from "axios";

import {  Button, Form, Input, Select } from "antd";

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
  const [users, setUsers] = useState([]);
  const [users1, setUsers1] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [users3, setUsers3] = useState([]);
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

  const getData = async () => {
    const res = await fetch("http://localhost:4000/viewproduct_category", {
      method: "GET",
    });

    const data = await res.json();
    setUsers(data);
  };

  const getData1 = async () => {
    const res = await fetch("http://localhost:4000/viewproductcompany", {
      method: "GET",
    });

    const data = await res.json();
    setUsers1(data);
    console.log(users1);
  };

  const getData2 = async () => {
    const Response = await fetch("http://localhost:4000/viewvehicle_category", {
      method: "GET",
    });
    
    const data = await Response.json();
    setUsers2(data);
    console.log("Satyam", users);
  };

  const getData3 = async () => {
    const res = await fetch("http://localhost:4000/viewvehicle_model", {
      method: "GET",
    });

    const data = await res.json();
    setUsers3(data);
    console.log(data);
  };

  console.log(users);

  useEffect(() => {
    getData();
    getData1();
    getData2();
    getData3();
  }, []);

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

            { min: 2 },
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

        <Form.Item name="product_category" label="Product Category">
          <Select
            placeholder="Select Product Category"
            style={{ width: "50%" }}
            allowClear
            mode="multiple"
            maxTagCount={2}
          >
            {users.map((product, index) => {
              return (
                <Select.Option key={index} value={product.product_category}>
                  {product.product_category}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item name="product_company" label="Product Company">
          <Select
            placeholder="Select Product Company"
            style={{ width: "50%" }}
            allowClear
       
          >
            {users1.map((product, index) => {
              return (
                <Select.Option key={index} value={product.product_company_id}>
                  {product.product_company}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        

        <Form.Item name="vehicle_category" label="Filter Vehicle Modal By Vehical Category">
          <Select
            placeholder="Select Vehicle Category"
            style={{ width: "50%" }}
          
            allowClear
  
          >
            {users2.map((product, index) => {
              return (
                <Select.Option key={index} value={product.vehicle_cat_id}>
                  {product.vehicle_type}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item name="vehicle_modal" label="Add Suggested Modal">
          <Select
            placeholder="Select Vehicle Modal"
            style={{ width: "50%" }}
            allowClear
        
          >
            {users3.map((product, index) => {
              return (
                <Select.Option key={index} value={product.model_id}>
                  {product.model_name}
                </Select.Option>
              );
            })}
          </Select>
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
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Add_product;
