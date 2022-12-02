const express = require('express');
const route=express.Router();

const {getvehical_company,postvehical_company,delete_vehical_company,update_vehical_company}=require('../Controller/vehicle_company');

route.get('/viewvehicle_company',getvehical_company);
route.post('/addvehicle_company',postvehical_company);
route.delete('/deletevehicle_company/:company_id',delete_vehical_company);
route.put('/update_vehicle_company/:company_id',update_vehical_company);


module.exports = route;