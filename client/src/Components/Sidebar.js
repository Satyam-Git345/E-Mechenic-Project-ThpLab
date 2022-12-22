import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import {UserOutlined,ToolTwoTone,CarTwoTone,DashboardTwoTone}  from '@ant-design/icons';


import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
 getItem(<NavLink to="/" >Dashboard</NavLink>,'0',<DashboardTwoTone />),
 getItem('Vehicle', 'sub1',<CarTwoTone />, [
    getItem(<NavLink to="/addvehicalcategory" >Add Vehical Category</NavLink>,'1'),
    getItem(<NavLink to="/viewvehicalcategory">Modify/View Category</NavLink>, '2'),
    getItem(<NavLink to="/addcompany">Add Company</NavLink>, '3'),
    getItem(<NavLink to="/viewcompany">Modify/View Company</NavLink>,'4'),
    getItem(<NavLink to="/addmodel">Add Model</NavLink>,'5'),
    getItem(<NavLink to="/viewmodel">Modify/View Model</NavLink>,'6')
]),

getItem('Garage', 'sub2',<ToolTwoTone />, [
    getItem(<NavLink to="/addshop">Add New Shop</NavLink>,'7'),
    getItem(<NavLink to="/viewshop">View/Modify Shop</NavLink>, '8'),
    getItem(<NavLink to="/shopverification">Shop Varification</NavLink>,'9'),
    getItem(<NavLink to="/blockedshop">Blocked Shop</NavLink>,'10')
]),

getItem('Customer','sub3', <UserOutlined />, [
    getItem(<NavLink to="viewcustomer">View Customers</NavLink>, '12'),
]),

getItem('Product','sub4', <UserOutlined />, [
    getItem(<NavLink to="addproductcategory">Add Product Category</NavLink>,'13'),
    getItem(<NavLink to="viewproductcategory">View/Modify Product Category</NavLink>, '14'),
    getItem(<NavLink to="addproductcompany">Add Company</NavLink>, '15'),
    getItem(<NavLink to="viewproductcompany">Modify/View Company</NavLink>, '16'),
    getItem(<NavLink to="addproduct">Add Product</NavLink>, '17'),
    getItem(<NavLink to="viewproduct">Modify/View Product</NavLink>, '18')
]),

getItem('Mechenical Services','sub5', <UserOutlined />, []),

getItem('Package','sub6', <UserOutlined />, [
    getItem(<NavLink to="addpackagecategory">Add Package Category</NavLink>,'19'),
    getItem(<NavLink to="viewpackagecategory">View Package Category</NavLink>, '20'),
    getItem(<NavLink to="addpackage">Add Package</NavLink>,'21'),
    getItem(<NavLink to="viewpackage">View Package</NavLink>, '22')
]),

getItem('Coupans','sub7', <UserOutlined />, [
    getItem(<NavLink to="addcoupan">Add Coupan</NavLink>,'23'),
    getItem(<NavLink to="viewcoupan">Modify/View Coupan</NavLink>, '24'),
]),

getItem('Offers','sub8', <UserOutlined />, [
    getItem(<NavLink to="addoffer">Add Offer</NavLink>,'25'),
    getItem(<NavLink to="viewoffer">Modify/View Offer</NavLink>, '26')
]),
];

const Sidebar= ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
      >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={items}
        style={{
           marginTop: '80px',
           fontSize: '15px',
           fontFamily:'Franklin Gothic Medium',
           size: '20px',
        }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            height: '8%',
            Color: 'red',
           }}
          E-Mechenic
        />
        <Content
          style={{
            margin: '0 16px',
            fontSize: '25px'
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
           
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 260,
            }}
          >
            {children}
          </div>
        </Content>

        <Footer
          style={{
            textAlign: 'center',
            fontSize: '15px',
            backgroundColor: 'yellow',
            height: '10px',
            marginTop: '70px',
          }}
        >
        <h1>E-mechenic ©2022 Created by Satyam Shukla and Team</h1>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Sidebar;