import React from "react";
import { useEffect, useState } from "react";
import { Button, Table } from "antd";
import axios from "axios";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const View_company = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([0]);

  const columns = [
    {
      title: "Vehicle Company",
      dataIndex: "company_name",
      key: "compay_name",
    },
    {
      title: "Company Logo",
      dataIndex: "company_logo",
      key: "compay_logo",
    },

    {
      Key: "2",
      title: "Actions",

      render: (data) => {
        return (
          <div style={{ display: "flex" }}>
            <EditOutlined
              style={{ color: "blue", fontSize: 20 }}
              onClick={() => {}}
            />

            <DeleteOutlined
              style={{ color: "red", marginLeft: 30, fontSize: 20 }}
              onClick={() => {
                deleteuser(data.company_id);
              }}
            />
          </div>
        );
      },
    },
  ];

  const getData = async () => {
    setLoading(1);
    const res = await fetch("http://localhost:4000/viewvehicle_company", {
      method: "GET",
    });

    const data = await res.json();
    setUsers(data);
    console.log(data);
  };

  const deleteuser = async (company_id) => {
    console.log(company_id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Vehicle Category!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await axios.delete(
          `http://localhost:4000/deletevehicle_company/${company_id}`
        );

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        navigate("/viewcompany");
      } else {
        swal("Your imaginary file is safe!");
      }
      getData();
    });
  };
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop: "-34px",
            color: "green",
            fontFamily: "-moz-initial",
          }}
        >
          All Company List
        </h1>
      </>
      <div>
        <Table columns={columns} dataSource={users} pagination={true} />
      </div>
    </div>
  );
};

export default View_company;
