const express = require('express');
const route=express.Router();

const {getproduct_company,getproduct_combyid,postproduct_company,delete_product_company,update_product_com}=require('../Controller/product_company');

route.get('/viewproductcompany',getproduct_company);
route.get('/viewprocompanybyid/:product_company_id',getproduct_combyid);
route.post('/addproduct_company',postproduct_company);
route.delete('/deleteproduct_company/:product_company_id',delete_product_company);
route.put('/updateproduct_company/:product_company_id',update_product_com);


module.exports = route;