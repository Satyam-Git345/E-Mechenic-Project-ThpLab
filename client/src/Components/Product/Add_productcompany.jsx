import React, { useState } from 'react';
import { Button} from 'antd';
import { Input, Form } from 'antd';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';

const Addproduct_company = () => {
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    product_company: "",
  });

  const Inputhandlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setData({
      ...data,
      [name]: value,
    });
  };

  const getuser = async () => {
    const data1 = await fetch("http://localhost:4000/addproduct_company", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data1);
  };

  
  const submitHandle = (e) => {
    e.preventDefault();
    getuser();
    swal("Product Company added successfully!","success");
    navigate("/viewproductcompany");
  };



  return (
    <>
         <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "-15px",
          color: "green",
          fontFamily: "-moz-initial",
        }}
      >
        Add Product Company
      </h1>
        <div style={{marginLeft:"330px", marginTop:"20px"}}>
      <Form>
        <Form.Item 
           name="product_category"
          label="Product Category"
          rules={[
            {
              required: true,
              message: "Product Category Name must be provided",
            },
            { min: 5 },
          ]}
          hasFeedback
        >
          <Input
            placeholder="Enter Product Category"
            style={{
              height: "40px",
              width:"50%"
            }}
            onChange={Inputhandlechange}

              name="product_company"
              value={data.product_company}
              required={data.product_company}
        
          />
        </Form.Item>

        

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={submitHandle} style={{marginLeft:"150px"}}>
           Add Product Company
          </Button>
        </Form.Item>
      </Form>
    </div>      
    </>
  );
};

export default Addproduct_company;

