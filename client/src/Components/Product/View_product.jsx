import React from "react";

import { useEffect, useState } from "react";
import {Table} from "antd";
import axios from "axios";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import swal from "sweetalert";
import { useNavigate, Link } from "react-router-dom";

const View_productcategory = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);


  const columns = [
    {
      title: "Product Name",
      dataIndex: "product_name",
      key: "product name",
    },

    {
      title: "Product Category",
      dataIndex: "product_category",
      key: "product_category",
    },

    {
      title: " Product Company",
      dataIndex: "product_company",
      key: "product_company",
    },

    {
      title: "MRP",
      dataIndex: "MRP",
      key: "MRP",
    },

    {
      Key: "5",
      title: "Actions",

      render: (users1) => {
        return (
          <div style={{ display: "flex" }}>
            <Link to={`/updateproductcategory/${users1.product_cat_id}`}>
              <EditOutlined
                style={{ color: "blue", fontSize: 20 }}
                onClick={() => handleRoutes(users1.product_id)}
              />
            </Link>

            <DeleteOutlined
              style={{ color: "red", marginLeft: 30, fontSize: 20 }}
              onClick={() => {
                deleteuser(users1.product_id);
              }}
            />
          </div>
        );
      },
    },
  ];

  const handleRoutes = (product_cat_id) => {
    navigate(`updateproductcategory/${product_cat_id}`);
  };

  const getData = async () => {
  
    const res = await fetch("http://localhost:4000/viewproduct", {
      method: "GET",
    });

    const data = await res.json();
    setUsers(data);
    console.log(users);
  };

  const deleteuser = async (product_cat_id) => {
    console.log(product_cat_id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Vehicle Category!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {      
      if (willDelete) {
        await axios.delete(`http://localhost:4000/deleteproduct_category/${product_cat_id}`);

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        navigate("/viewproductcategory");
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
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "-20px",
          color: "green",
          fontFamily: "-moz-initial",
        }}
      >
           All Products Along with Companies And Categories
      </h1>

      <div>
        <Table columns={columns} dataSource={users} pagination={true} />
      </div>
    </div>
  );
};

export default View_productcategory;
