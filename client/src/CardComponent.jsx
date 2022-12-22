import React from "react";
import { Avatar,Card} from "antd";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

function CardComponent() {
  return (
    <div className="App">
      <Card  hoverable={true}
        style={{
            width:'260px',
            height:'240px',
            marginLeft: '105px',
            marginRight:'20px',
            marginTop: '-30px'
        }}
        actions={[
          <FacebookFilled style={{ color: "blue" }} />,
          <TwitterOutlined style={{ color: "skyblue" }} />,
          <InstagramOutlined style={{ color: "purple" }} />,
          <YoutubeFilled style={{ color: "red" }} />,
        ]}

        cover={<div
         style={{
            height:"120px",
            width:"100%",
            background:"linear-gradient(#FF007A,#4200FF)",
            color:'white',
            fontSize:'30px',
            paddingTop:'20px',
            fontFamily:"cursive",
         }}
        >
            Our Services
        </div>}
      >
        <Card.Meta 
        style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop:'-60px',
            MarginLeft:"20px",
            color: 'grey',
        }}
        avatar={<Avatar size={50}
         src={"https://www.shutterstock.com/image-vector/perfect-logo-business-related-automotive-600w-1763587409.jpg"}>
       
        </Avatar>}
        
        title={"Tranding Services"}
        description="@E-Mechenic"
        >
        
        </Card.Meta>
          <p style={{
             marginTop:"40px"
          }}></p>
      </Card>
    </div>
  );
}

export default CardComponent;
