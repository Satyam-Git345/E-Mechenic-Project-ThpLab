import React from "react";
import { useEffect, useState } from "react";
import { Table, Modal, Form, Input } from "antd";
import axios from "axios";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import swal from "sweetalert";
import { useNavigate, Link } from "react-router-dom";
// import { LoadingOutlined } from '@ant-design/icons';
// import { Spin } from 'antd';


const ViewVehicalCategory = () => {
  const [users, setUsers] = useState([{}]);

  const [users1, setUsers1] = useState([{
    vehicle_cat_id:"",
     vehicle_type:""
  }]);

  const navigate = useNavigate();
  const [loading, setLoading] = useState("");
  const [isEditing, setisEditing] = useState(false);

  const columns = [
    {
      key: "vehicle_type",
      title: "Vehicle Category",
      dataIndex: "vehicle_type",
      render: (data) => {
        return <p>{data}</p>;
      },
    },

    {
      Key: "5",
      title: "Actions",

      render: (data) => {
        return (
          <>
            <Link to={`/updatevehiclecategory/${data.vehicle_cat_id}`}>
           <EditOutlined
              style={{ color: "blue", fontSize: 20 }}
              onClick={() => handleRoutes(data.vehicle_cat_id)}
            />
           </Link>

            <DeleteOutlined
              style={{ color: "red", marginLeft: 30, fontSize: 20 }}
              onClick={() => {
                deleteuser(data.vehicle_cat_id);
              }}
            />
          </>
        );
      },
    },
  ];

  const Inputhandlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUsers({
      ...users,
      [name]: value,
    });
  };

  // const EditUser = async (vehicle_cat_id) => {
  //     const Response = await fetch(`http://localhost:4000/viewvehicle_categorybyid/${vehicle_cat_id}`, {
  //       method: "GET",
  // });
      
  //     const data1 =  await Response.json();
  //     setUsers1(data1);
  //     // console.log("ay", data1);
  //     console.log("Satyam",users1);
  //     setisEditing(true);
  // };

  const handleCancel = () => {
    setisEditing(false);
  };

  const handleOk = () => {
    setisEditing(false);
  };

  const getData = async () => {
    
  
    const Response = await fetch("http://localhost:4000/viewvehicle_category", {
      method: "GET",
    });
     const data = await Response.json();
     setUsers(data);
     console.log("Satyam",users);
  };


  const deleteuser = async (vehicle_cat_id) => {
    // setLoading(10);
    console.log(vehicle_cat_id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Vehicle Category!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await axios.delete(
          `http://localhost:4000/deletevehicle_category/${vehicle_cat_id}`
        );

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        navigate("/viewvehicalcategory");
      } else {
        swal("Your imaginary file is safe!");
      }
      getData();
    });
  };

   const handleRoutes = (id) => {
     navigate(`updatevehiclecategory/${id}`);
   };

  useEffect(() => {
    getData();
  
  }, []);

  return (
    <div>
      <div>
        <div>
          <span></span>
        </div>
        <Table columns={columns} dataSource={users} pagination={true} />
        <Modal
          title="Edit Vehicle Category"
          visible={isEditing}
          onCancel={handleCancel}
          onOk={handleOk}
          okText="Save"
          bodyStyle={{
            borderRadius: "200px",
            height: "100px",
            backgroundColor: "transparent",
            marginTop: "80px",
          }}
        >
          <Form>
            <Form.Item
              name="Vehical Cat Name"
              rules={[
                {
                  required: true,
                  message: "Vehical Category Name must be provided",
                },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input

                style={{
                  marginTop: "-15px",
                  height: "40px",
                }}
                onChange={Inputhandlechange}
                name="vehicle_type"
                // value={vehicle_type}
                required={users1.vehicle_type}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default ViewVehicalCategory;
