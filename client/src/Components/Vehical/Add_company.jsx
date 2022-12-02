import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input, Form } from "antd";
import swal from "sweetalert";

const Add_company = () => {
  const [companyname, setCompanyname] = useState("");
  const [companylogo, setCompanylogo] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const setUser = async () => {
    const data = { companyname,companylogo};
   const data1= await fetch("http://localhost:4000/addvehicle_company", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data1);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    setUser();
    setOpen(false);
    swal(
      "Vehicle Category added successfully!",
      "You clicked the button!",
      "success"
    );
  };

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
        bodyStyle={{
          borderRadius: "200px",
          height: "400px",
          backgroundColor: "transparent",
        }}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={submitHandle}
          >
            Submit
          </Button>,
        ]}
      >
        <h2>Add Vehicle Company</h2>
        <Form>
          <Form.Item
            name="Vehical company Name"
            rules={[
              {
                required: true,
                message: "Vehical Company Name must be provided",
              },
              { min: 5 },
            ]}
            hasFeedback
          >
            <Input
              placeholder="Enter Vehicle Company Name"
              style={{
                marginTop: "30px",
                height: "40px",
              }}
              value={companyname}
              name="companyname"
              onChange={(e) => {
                setCompanyname(e.target.value);
              }}
              required
            />
          </Form.Item>
          <h2>Upload Vehicle Company Logo</h2>
          <Form.Item
            name="Vehical company logo"
            rules={[
              {
                required: true,
                message: "Vehical Company logo must be provided",
              },
              { min: 5 },
            ]}
            hasFeedback
          >
            <Input
              placeholder="Enter Vehicle Company logo link"
              style={{
                marginTop: "30px",
                height: "40px",
              }}
              value={companylogo}
              name="companylogo"
              onChange={(e) => {
                setCompanylogo(e.target.value);
              }}
              required
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Add_company;
