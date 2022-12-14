import React, { useState } from "react";
import axios from "axios";
import { Input, Form,Button } from "antd";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


const formItemLayout = {
  labelCol: {
    xs: {
      span: 12,
    },
    sm: {
      span: 7,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 5,
      offset: 0,
    },
    sm: {
      span: 11,
      offset:1,
    },
  },
};
const Add_productcategory = () => {
  const navigate = useNavigate();

  const [product_category, setProductCategoryname] = useState("");
  const [SGST, setSgst] = useState("");
  const [CGST, setCgst] = useState("");

 
  const setUser = () => {
    axios.post("http://localhost:4000/addproduct_category", {
           SGST,
           CGST,
           product_category,
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
    swal("Vehicle Category added successfully!", "success");
    navigate("/viewproductcategory");
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
        Add Product Category
      </h1>
        <div>
      <Form
         {...formItemLayout}
         {...tailFormItemLayout}
         onSubmit={e => {
          e.preventDefault();
          setUser();
          swal("Vehicle Category added successfully!", "success");
          navigate("/viewproductcategory");
         }}
      >
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
            onChange={(e) => {
              setProductCategoryname(e.target.value);
            }}
            value={product_category}
          />
        </Form.Item>

        <Form.Item name="SGST" label="SGST" 
        rules={[
          {
            required: true,
            message: "SGST must be provided",
          },
          { min: 1 },
        ]}
        hasFeedback
        >
          <Input 
          placeholder="Enter SGST Number"
             onChange={(e) => {
              setSgst(e.target.value);
            }}
           value={SGST}
          />
        </Form.Item>

        <Form.Item name="CGST" label="CGST"
        rules={[
          {
            required: true,
            message: "CGST must be provided",
          },
          { min: 1 },
        ]}
        hasFeedback
        >
          <Input
           placeholder="Enter CGST Number" 
           onChange={(e) => {
            setCgst(e.target.value);
          }}
          value={CGST}
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onClick={submitHandle} style={{marginLeft:"470px"}}>
           Add Product Category
          </Button>
        </Form.Item>
      </Form>
    </div>
      </>
  );
};

export default Add_productcategory;
