import React from "react";
import { useEffect, useState } from "react";
import { Table} from "antd";
import axios from "axios";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import swal from "sweetalert";
import { useNavigate, Link } from "react-router-dom";

const ViewVehicalCategory = () => {
  const [users, setUsers] = useState([{}]);
  const navigate = useNavigate();
  

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

  

  
  const getData = async () => {
    const Response = await fetch("http://localhost:4000/viewvehicle_category", {
      method: "GET",
    });
    
    const data = await Response.json();
    setUsers(data);
    console.log("Satyam", users);
  };

  const deleteuser = async (vehicle_cat_id) => {
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
       <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop: "-38px",
            color: "green",
            fontFamily: "-moz-initial",
          }}
        >
          All Vehicle Categories
        </h1>
      <div>
      <Table 
         columns={columns}
         dataSource={users} 
         pagination={true} />
        </div>
    </div>
  );
};

export default ViewVehicalCategory;
