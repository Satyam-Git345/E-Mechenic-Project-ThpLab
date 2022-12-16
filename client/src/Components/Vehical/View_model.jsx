import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";

const View_modal = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const columns = [
    {
      title: "Modal Name",
      dataIndex: "model_name",
      key: "modal_name",
    },
    {
      title: "Company Name",
      dataIndex: "company_name",
      key: "company_name",
    },
    {
      title: "vehicle_type",
      dataIndex: "vehicle_type",
      key: "vehicle_type",
    },
    {
      title: "Fuel Type",
      dataIndex: "fuel_type",
      key: "fuel_type",
    },

    {
      Key: "2",
      title: "Actions",

      render: (data) => {
        return (
          <>
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
          </>
        );
      },
    },
  ];

  const getData = async () => {
    const res = await fetch("http://localhost:4000/viewvehicle_model", {
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
    <>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "-38px",
          color: "green",
          fontFamily: "-moz-initial",
        }}
      >
        All Available Modals
      </h1>
      <div>
        <Table columns={columns} dataSource={users} pagination={true} />
      </div>
    </>
  );
};

export default View_modal;
