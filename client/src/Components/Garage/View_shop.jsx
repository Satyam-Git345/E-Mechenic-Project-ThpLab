import React from "react";
import { useEffect, useState } from "react";
import { Button, Table,} from "antd";
import axios from "axios";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const View_shop = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([0]);

  const columns = [
    {
      
      title: "Shop Name",
      dataIndex: "shop_name",
      key: "shop_name",
      
    },

    {
      title: "Owner Name",
      dataIndex: "shop_owner_name",
      key: "shop_owner_name",

    },

    {
      title: "Mobile Number",
      dataIndex: "mobile_no",
      key: "mobile_no",

    },

    {
      title: "Registraction Number",
      dataIndex: "shop_registration",
      key: "shop_registration",
    },

    {
      title: "Email",
      dataIndex:"email",
      key:"email",
    },
    
    {
      title: "Shop Details",
      dataIndex: "website",
      key: "email",
    },


    {
      Key: "5",
      title: "Actions",

      render: (users) => {
        return (
          <div style={{display: 'flex'}}>
            <EditOutlined
              style={{ color: "blue", fontSize: 20 }}
              
            />

            <DeleteOutlined
              style={{ color: "red", marginLeft: 30, fontSize: 20 }}
              onClick={() => {
                deleteuser(users.shop_id);
              }}
            />
          </div>
        );
      },
    },
  ];

  const getData = async () => {
    setLoading(1);
    const res = await fetch("http://localhost:4000/viewshop", {
      method: "GET",
    });

    const data = await res.json();
    setUsers(data);
    console.log(data);
  };

  const deleteuser = async (shop_id) => {
    setLoading(10);
    console.log(shop_id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Vehicle Category!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await axios.delete(
          `http://localhost:4000/removeshop/${shop_id}`
        );

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        navigate("/viewshop");
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

export default View_shop;
