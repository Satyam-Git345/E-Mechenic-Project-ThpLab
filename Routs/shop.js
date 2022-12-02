const express = require('express');
const route=express.Router();

const {getshop,postshop,deleteshop,updateshop}=require('../Controller/shop');
// const {getvehical_company,postvehical_company,delete_vehical_company,update_vehical_company}=require('../Controller/vehicle_company');


route.get('/viewshop',getshop);
route.post('/addshop',postshop);
route.delete('/removeshop/:shop_id',deleteshop);
route.put('/editshop/:shop_id',updateshop);


module.exports = route;