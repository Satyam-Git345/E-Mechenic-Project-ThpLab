import React from "react";
import { useEffect, useState } from "react";
import { Button, Table, Pagination } from "antd";
import axios from "axios";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const ViewVehicalCategory = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([0]);

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
            <EditOutlined
              style={{ color: "blue", fontSize: 20 }}
              onClick={() => {}}
            />

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

  const getData = async () => {
    setLoading(1);
    const res = await fetch("http://localhost:4000/viewvehicle_category", {
      method: "GET",
    });

    const data = await res.json();
    setUsers(data);
    console.log(data);
  };

  const deleteuser = async (vehicle_cat_id) => {
    setLoading(10);
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

  useEffect(() => {
    getData();
  }, []);

  
  return (
    <div>
      <div>
        <div
          style={{
            marginBottom: -84,
          }}
        >
          <Button
            type="primary"
       
            // disabled={!hasSelected}
            loading={!loading}
          >
            Reload
          </Button>
          <span
            
          >
            {/* {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""} */}
          </span>
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

export default ViewVehicalCategory;
