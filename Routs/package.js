const express = require('express');
const route=express.Router();

const {getpackage_cat,getpackage_catbyid,postpackage_cat,delete_package_cat,update_package_cat}=require('../Controller/Package');

route.get('/viewpackage_category',getpackage_cat);
route.get('/viewpackage_categorybyid/:package_cat_id',getpackage_catbyid);
route.post('/addpackage_category',postpackage_cat);
route.delete('/deletpackage_category/:package_cat_id',delete_package_cat);
route.put('/update_package_category/:package_cat_id',update_package_cat);


module.exports = route;