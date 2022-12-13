import React from "react";
import { useEffect, useState } from "react";
import { Table,} from "antd";
import axios from "axios";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const View_customer = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const columns = [
    {
      
      title: "Photo",
      // dataIndex: "profile_photo",
      key: "profile_photo",
      
    },

    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",

    },

    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },

    {
      title: "Mobile Number",
      dataIndex: "mobile_no",
      key: "mobile_no",
    },

    {
      title: "Reg. On",
      dataIndex:"reg_on",
      key:"reg_on",
    },
    
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Data Of Birth",
      dataIndex: "DOB",
      key: "DOB",
    },


    {
      Key: "5",
      title: "Actions",

      render: (data) => {
        return (
          <div style={{display: 'flex'}}>
            <EditOutlined
              style={{ color: "blue", fontSize: 20 }}
              onClick={() => {}}
            />

            <DeleteOutlined
              style={{ color: "red", marginLeft: 30, fontSize: 20 }}
              onClick={() => {
                deleteuser(data.customer_id);
              }}
            />
          </div>
        );
      },
    },
  ];

  const getData = async () => {
    
    const res = await fetch("http://localhost:4000/viewcustomer", {
      method: "GET",
    });

    const data = await res.json();
    setUsers(data);
    console.log(data);
  };

  const deleteuser = async (customer_id) => {
    
    console.log(customer_id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Vehicle Category!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await axios.delete(
          `http://localhost:4000/deletcustomer/${customer_id}`
        );

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        navigate("/viewcustomer");
      } else {
        swal("Your imaginary file is safe!");
      }
      // getData();
    });
  };

  useEffect(() => {
    getData();
  }, []);

  
  return (
    <div>
      <div>
        <div>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop: "-20px",
            color: "green",
            fontFamily: "-moz-initial",
          }}
        >
          All Active Customers
        </h1>
        </div>



        <Table
          // rowSelection={rowSelection}
          columns={columns}
          dataSource={users}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default View_customer;
