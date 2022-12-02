import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Input, Form } from 'antd';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';

const Add_vehical_category = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    vehicle_type: "",
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
    const data1 = await fetch("http://localhost:4000/addvehicle_category", {
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
    setOpen(false);
    swal("Vehicle Category added successfully!","success");
    navigate("/viewvehicalcategory");
  };


  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ borderRadius: "200px", height: "200px", backgroundColor: "transparent" }}

        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={submitHandle} loading={loading}>
            Submit
          </Button>,

        ]}
      >
        <h2>Add Vehicle Category</h2>
       <Form>
          <Form.Item
            name="Vehical Cat Name"
            rules={[
              {
                required: true,
                message: 'Vehical Category Name must be provided',
              },
              { min: 3 }
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Vehicle Category"
              style={{
                marginTop: '30px',
                height: '40px'
              }}
              onChange={Inputhandlechange}
              name="vehicle_type"
              value={data.vehicle_type}
              required={data.vehicle_type}
            />
          </Form.Item>
        </Form>

      </Modal>
    </>
  );
};

export default Add_vehical_category;

