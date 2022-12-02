const express = require('express');
const route=express.Router();

const {getproduct_cat,postproduct_cat,delete_product_cat,update_product_cat}=require('../Controller/product_category');

route.get('/viewproduct_category',getproduct_cat);
route.post('/addproduct_category',postproduct_cat);
route.delete('/deleteproduct_category/:product_cat_id',delete_product_cat);
route.put('/updateproduct_category/:product_cat_id',update_product_cat);

module.exports = route;