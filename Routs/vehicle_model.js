const express = require('express');
const route=express.Router();

const {getvehical_model,postvehical_model,delete_vehical_model,update_vehical_model}=require('../Controller/vehicle_model');
// const {getvehical_company,postvehical_company,delete_vehical_company,update_vehical_company}=require('../Controller/vehicle_company');


route.get('/viewvehicle_model',getvehical_model);
route.post('/addvehicle_model',postvehical_model);
route.delete('/deletevehicle_model/:model_id/:company_id',delete_vehical_model);
route.put('/update_vehicle_model/:vehicle_cat_id',update_vehical_model);


module.exports = route;