import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";

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
function Add_model() {
  const navigate = useNavigate();
  const [companyname, setCompanyName] = useState([]);
  const [category, setcategory] = useState([]);
  const [company_name, setcompany_name] = useState({
    company_id: "",
    company_name: "",
  });
  const [category_name, setcotegory_name] = useState({
    vehicle_cat_id: "",
    vehicle_type: "",
  });
  const [modell_name, setmodel_name] = useState({
    model_name: "",
  });
  const [fuel_type, setfuel_type] = useState({
    fuel_type: "",
  });
  
  const getdata = async () => {
    const Response = await fetch("http://localhost:4000/viewvehicle_company", {
      method: "GET",
    });

    const data = await Response.json();
    console.log(data);
    setCompanyName(data);

    const Responsesecond = await fetch(
      "http://localhost:4000/viewvehicle_category",
      {
        method: "GET",
      }
    );
    
    const seconddata = await Responsesecond.json();
    console.log(seconddata);
    setcategory(seconddata);
  };
 
  const postdata = async () => {
    const data = {
      company_id: company_name.company_id,
      vehicle_cat_id: category_name.vehicle_cat_id,
      model_name: modell_name.model_name,
      fuel_type: fuel_type.fuel_type,
    };
    console.log("this is data", data);
    const res = await Axios.post(
      "http://localhost:4000/addvehicle_model",
      data
    );

    console.log("responses of data", res);
  };

  const Submithandle = async (e) => {
    e.preventDefault();
    postdata();
    navigate("/viewvehiclmodel");
    window.confirm("Successfull Submitted");
  };
  useEffect(() => {
    getdata();
  }, []);
  
  
  return (
    <>
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
        Add New Modal
      </h1>

      <Form
        autoComplete="off"
        {...formItemLayout}
        name="register"
        scrollToFirstError
      >
        
        <Form.Item name="product_category" label="Select Vehicle Company">
          <Select
            placeholder="Select Vehicle Company"
            style={{ width: "50%" }}
            allowClear
            onChange={(value) => {
              setcompany_name({
                company_id: value,
              });
            }}
          >
            {companyname.map((value, index) => {
              return (
                <Select.Option 
                key={index} 
                value={value.company_id}
                
                >
                  {value.company_name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>


        <Form.Item name="vehicle_category" label="Select Vehicle Category">
          <Select
            placeholder="Select Vehicle Category"
            style={{ width: "50%" }}
            allowClear
            onChange={(value) => {
              setcotegory_name({
                vehicle_cat_id: value,
              });
            }}
          >
            {category.map((value, index) => {
              return (
                <Select.Option 
                key={index} 
                value={value.vehicle_cat_id}
                
                >
                  {value.vehicle_type}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="modal_name"
          label="Enter Modal Name"
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
            placeholder="Enter Modal Name"
            onChange={(e) => {
              setmodel_name({
                model_name: e.target.value,
              });
            }}
            value={modell_name.model_name}
          />
        </Form.Item>
        

        <Form.Item name="fule_type" label="Select Fuel Type">
          <Select
            placeholder="Select Fuel Type"
            style={{ width: "50%" }}
            allowClear

            onChange={(value) => {
              setfuel_type({
                fuel_type: value,
              });
            }}
            value={fuel_type.fuel_type}
          >

            <Select.Option  value="Petrol">Petrol</Select.Option>
            <Select.Option  value="Diesel">Diesel</Select.Option>
            <Select.Option  value="CNG">CNG</Select.Option>
            <Select.Option  value="Electrical">Electrical</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" onClick={Submithandle} >
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
    </>
  );
}

export default Add_model;