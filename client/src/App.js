import React from 'react';

import { Routes, Route } from "react-router-dom";
import Home from './Home';
import 'antd/dist/reset.css';
import Sidebar from './Components/Sidebar';
import Addmodel from './Components/Vehical/Add_model'
import Addcompany from './Components/Vehical/Add_company';
import Addvehiclecategory from './Components/Vehical/Add_vehical_category';
import Viewcompany from './Components/Vehical/View_company';
import Viewmodel from './Components/Vehical/View_model';
import Viewvehiclecategory from './Components/Vehical/View_vehical_category';
import Addshop from './Components/Garage/Add_Shop';
import Blockedshop from './Components/Garage/Blocked_shop';
import Shopverification from './Components/Garage/Shop_verification';
import Viewshop from './Components/Garage/View_shop';
import UpdateShop from './Components/Garage/UpdateShop';
import Viewcustomer from './Components/Customer/View_customer';
import Addproductcategory from './Components/Product/Add_productcategory';
import UpdateVehiclecategory from './Components/Vehical/UpdateVehiclecategory';
import Viewproductcategory from './Components/Product/View_productcategory';
import Addproductcompany from './Components/Product/Add_productcompany';
import Viewproductcompany from './Components/Product/View_productcompany'
import Addprduct from './Components/Product/Add_product';
import Viewproduct from './Components/Product/View_product';
import Addpackage from './Components/Package/Addpackage';
import Viewpackage from './Components/Package/View_package';
import Addpackagecategory from './Components/Package/Addpackagecategory';
import Viewpackagecategory from './Components/Package/Viewpackagecategory';
import Addcoupan from './Components/Coupan/Add_coupan';
import Viewcoupan from './Components/Coupan/View_coupan';
import Addoffer from './Components/Offer/Add_offer';
import Viewoffer from './Components/Offer/View_offer';
import UpdateProductcategory from './Components/Product/UpdateProductcategory';



function App() {
    return (
        <>
          
                <Sidebar>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/addmodel" element={<Addmodel />} />
                        <Route path="/addcompany" element={<Addcompany />} />
                        <Route path="/addvehicalcategory" element={<Addvehiclecategory />} />
                        <Route path="/updatevehiclecategory/:vehicle_cat_id" element={<UpdateVehiclecategory />} />
                        <Route path="/updateproductcategory/:product_cat_id" element={<UpdateProductcategory />} />
                        <Route path="/updateshop/:shop_id" element={<UpdateShop/>} />
                        <Route path="/viewcompany" element={<Viewcompany />} />
                        <Route path="/viewmodel" element={<Viewmodel />} />
                        <Route path="/viewvehicalcategory" element={<Viewvehiclecategory />} />
                        <Route path="/addshop" element={<Addshop />} />
                        <Route path="/viewshop" element={<Viewshop />} />
                        <Route path="/blockedshop" element={<Blockedshop />} />
                        <Route path="/shopverification" element={<Shopverification />} />
                        <Route path="/viewcustomer" element={<Viewcustomer />} />
                        <Route path="/addproductcategory" element={<Addproductcategory />} />
                        <Route path="/viewproductcategory" element={<Viewproductcategory />} />
                        <Route path="/addproductcompany" element={<Addproductcompany />} />
                        <Route path="/viewproductcompany" element={<Viewproductcompany />} />
                        <Route path="/addproduct" element={<Addprduct />} />
                        <Route path="/viewproduct" element={<Viewproduct />} />
                        <Route path="/addpackage" element={<Addpackage />} />
                        <Route path="/viewpackage" element={<Viewpackage />} />
                        <Route path="/addpackagecategory" element={<Addpackagecategory />} />
                        <Route path="/viewpackagecategory" element={<Viewpackagecategory />} />
                        <Route path="/addcoupan" element={<Addcoupan />} />
                        <Route path="/viewcoupan" element={<Viewcoupan />} />
                        <Route path="/viewoffer" element={<Viewoffer />} />
                        <Route path="/addoffer" element={<Addoffer />} />
                   </Routes>
                </Sidebar>
          
        </>
    )
}

export default App;