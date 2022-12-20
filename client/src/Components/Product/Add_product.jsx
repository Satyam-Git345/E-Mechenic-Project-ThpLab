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
  const [productcategory, setProductcategory] = useState([]);
  const [productcompany, setProductcompany] = useState([]);

  const [product_category, setProduct_category] = useState({
       product_cat_id:"",
       product_category:""
  });
   
  const [product_company, setProduct_company] = useState({
    product_company_id:"",
    product_company:""
});


   const [product_name, setProductname] = useState({
      product_name:"",
  });
  const [MRP, setMrp] = useState({
      MRP:"",
  });
  
  const [description, setDescription] = useState({
      description:"",
  });

  const postdata = async () => {
    const data = {
      product_cat_id: product_category.product_cat_id,
      product_company_id: product_company.product_company_id,
      product_name: product_name.product_name,
      MRP: MRP.MRP,
      description:description.description,
    }
    console.log("this is data", data);
    const res = await axios.post(
      "http://localhost:4000/addproduct",
      data
    );
    
    console.log("responses of data", res);
  };
 
  const submitHandle = (e) => {
    e.preventDefault();
    postdata();
    swal("Good job!", "Shop Added Sucessfully!", "success");
    navigate("/viewproduct");
  };

  const getData = async () => {
    const res = await fetch("http://localhost:4000/viewproduct_category", {
      method: "GET",
    });

    const data = await res.json();
    setProductcategory(data);
  };

  const getData1 = async () => {
    const res = await fetch("http://localhost:4000/viewproductcompany", {
      method: "GET",
    });

    const data = await res.json();
    setProductcompany(data);
    // console.log(users1);
  };

  useEffect(() => {
    getData();
    getData1();
   
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
              setProductname({
                product_name: e.target.value,
              });
            }}
            value={product_name.product_name}
          />
        </Form.Item>

        <Form.Item
          name="MRP"
          label="MRP"
          rules={[
            {
              type: "text",
              required: true,
              message: "Please input MRP!",
            },

            { min: 2 },
          ]}
        >
          <Input
            placeholder="Enter MRP"
            onChange={(e) => {
              setMrp({
                MRP: e.target.value,
              });
            }}
            value={MRP.MRP}
          />
        </Form.Item>

        <Form.Item name="product_category" label="Product Category">
          <Select
            placeholder="Select Product Category"
            style={{ width: "50%" }}
            allowClear
            onChange={(value) => {
              setProduct_category({
                product_cat_id: value,
              });
            }}
          >
            {productcategory.map((value, index) => {
              return (
                <Select.Option 
                key={index} 
                value={value.product_cat_id}
                
                >
                  {value.product_category}
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
            onChange={(value) => {
              setProduct_company({
                product_company_id: value,
              });
            }}
          >
            {productcompany.map((value, index) => {
              return (
                <Select.Option key={index}
                 value={value.product_company_id}
                 >
                  {value.product_company}
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
              setDescription({
                description: e.target.value,
              });
            }}
            value={description.description}
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="Add Product" onClick={submitHandle}>
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Add_product;
