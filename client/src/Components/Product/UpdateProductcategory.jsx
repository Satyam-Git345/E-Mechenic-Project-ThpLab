import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Input,form,Button} from "antd";


const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

function Update_productcategory() {
  const { product_cat_id } = useParams();
  console.log("Update", product_cat_id);
  const [form] = Form.useForm();

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
    navigate(`/viewproductcategory`);
  };

  const updateData = async () => {
    const Response = await Axios.put(
      `http://localhost:4000/updateproduct_category/${product_cat_id}`,
      data1
    );
    console.log("data", Response);
  };

  const getuser = async () => {
    const res = await Axios.get(
      `http://localhost:4000/viewproduct_categorybyid/${product_cat_id}`
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
        Edit Product Category
      </h1>
      <div style={{ marginLeft: "330px", marginTop: "20px" }}>
        <Form>
          <Form.Item
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
              style={{
                height: "40px",
                width: "50%",
              }}
              onChange={Inputhandlechange}
              name="product_category"
              value={data1.product_category}
              placeholder="Enter Product Category"
            />
          </Form.Item>
                        
          <Form.Item  label="SGST">
            <Input
              style={{ width: "50%", height: "40px" }}
              name="SGST"
              onChange={Inputhandlechange}
              value={data1.SGST}
              placeholder="Enter SGST"
            />
          </Form.Item>

          <Form.Item  label="CGST">
            <Input
              style={{ width: "50%", height: "40px" }}
              
              onChange={Inputhandlechange}
              value={data1.CGST}
              name="CGST"
              placeholder="Enter CGST"
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

export default Update_productcategory;
