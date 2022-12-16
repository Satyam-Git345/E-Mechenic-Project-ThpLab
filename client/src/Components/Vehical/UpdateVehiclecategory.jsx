import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Form } from "antd";
import { Button, Input} from "antd";


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
      span: 10,
      offset: 0,
    },
  },
};

function UpdateVehicle_category() {
  const { vehicle_cat_id } = useParams();
  console.log(vehicle_cat_id);

  const navigate = useNavigate();
  const [data1, setData] = useState({
    vehicle_type: "",
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
    console.log(data1.vehicle_type);
    updateData();
    navigate(`/viewvehicalcategory`);
  };

  const updateData = async () => {
    const Response = await Axios.put(
      `http://localhost:4000/update_vehicle_category/${vehicle_cat_id}`,
      data1
    );
    console.log("data", Response);
  };

  const getuser = async () => {
    const res = await Axios.get(
      `http://localhost:4000/viewvehicle_categorybyid/${vehicle_cat_id}`
    );

    const oldData = res.data[0];
    console.log(oldData);
    setData(oldData);
  };

  useEffect(() => {
    getuser();
  }, []);

  return (
    <>
      <Form
      {...formItemLayout}
      {...tailFormItemLayout}
     >
      <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop: "-38px",
            color: "green",
            fontFamily: "-moz-initial",
            fontSize:"27px"
          }}
        >
          Edit Vehicle Category
        </h1>
        <Form.Item
        label="Vehicle_type"
        >
          <Input
            onChange={Inputhandlechange}
            name="vehicle_type"
            value={data1.vehicle_type}
            required={data1.vehicle_type}
          />
        </Form.Item>
        <Form.Item>
        <Button key="submit" type="primary" onClick={submitHandle}
        style={{marginLeft:"500px", marginTop:"30px"}}
        >
          Save
        </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default UpdateVehicle_category;
