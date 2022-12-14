import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Input,Button} from "antd";




function Update_productcompany() {
  const { product_company_id } = useParams();
  console.log("Update", product_company_id);


  const navigate = useNavigate();
  const [data1, setData] = useState({
    product_category: "",
    SGST: "",
    CGST: "",
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
    navigate(`/viewproductcompany`);
  };

  const updateData = async () => {
    const Response = await Axios.put(
      `http://localhost:4000/updateproduct_company/${product_company_id}`,
      data1
    );
    console.log("data", Response);
  };

  const getuser = async () => {
    const res = await Axios.get(
      `http://localhost:4000/viewprocompanybyid/${product_company_id}`
    );

    const oldData = res.data[0];
    console.log("get shop by id", oldData);
    setData(oldData);
    console.log("Pavan", data1.shop_name);
  };

  useEffect(() => {
    getuser();
  }, []);

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
        Edit Product Company
      </h1>
      <div style={{ marginLeft: "330px", marginTop: "20px" }}>
        <Form>
          <Form.Item
            label="Product Company"
            rules={[
              {
                required: true,
                message: "Product Company Name must be provided",
              },
              { min: 5 },
            ]}
            hasFeedback
          >
            <Input
              style={{
                height: "40px",
                width: "50%",
              }}
              onChange={Inputhandlechange}
              name="product_company"
              value={data1.product_company}
              placeholder="Enter Product Company"
            />
          </Form.Item>
                        
        
          


          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={submitHandle}
              style={{ marginLeft: "150px" }}
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Update_productcompany;
