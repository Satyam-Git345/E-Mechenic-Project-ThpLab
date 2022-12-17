import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button, Form, Input, Select } from "antd";

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
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [users1, setUsers1] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [users3, setUsers3] = useState([]);

  const [product_name, setProductname] = useState("");
  const [MRP, setMrp] = useState("");
  const [product_cat_id, setProductCategory] = useState("");
  const [product_company_id, setProductcompany] = useState("");
  //const [vehicle_cat_id, setVehicleCategory] = useState("");
  //const [modal, setModal] = useState("");
  const [description, setDescription] = useState("");

  const setUser = () => {
    axios
      .post("http://localhost:4000/addproduct", {
         product_name,
         MRP,
         product_cat_id,
         product_company_id,
         description
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
    navigate("/viewproduct");
  };

  const getData = async () => {
    const res = await fetch("http://localhost:4000/viewproduct_category", {
      method: "GET",
    });

    const data = await res.json();
    setUsers(data);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData1 = async () => {
    const res = await fetch("http://localhost:4000/viewproductcompany", {
      method: "GET",
    });

    const data = await res.json();
    setUsers1(data);
    console.log(users1);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
            onChange={(e) => {
              setProductname(e.target.value);
            }}
            value={product_name}
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
            onChange={(e) => {
              setMrp(e.target.value);
            }}
            value={MRP}
          />
        </Form.Item>

        <Form.Item name="product_category" label="Product Category">
          <Select
            placeholder="Select Product Category"
            style={{ width: "50%" }}
            allowClear
            // mode="multiple"
            // maxTagCount={1}
          >
            {users.map((product, index) => {
              return (
                <Select.Option 
                key={index} 
                value={product.product_cat_id}
                onChange={(e) => {
                  setProductCategory(e.target.value);
                }}
                >
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
                <Select.Option key={index}
                 value={product.product_company_id}
                 onChange={(e) => {
                  setProductcompany(e.target.value);
                }}
                 >
                  {product.product_company}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="vehicle_category"
          label="Filter Vehicle Modal By Vehical Category"
        >
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
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onClick={submitHandle}>
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Add_product;
