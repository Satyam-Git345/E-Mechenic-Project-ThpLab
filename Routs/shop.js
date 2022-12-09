const express = require('express');
const route=express.Router();

const {getshop,postshop,deleteshop,updateshop,getshop_byid}=require('../Controller/shop');



route.get('/viewshop',getshop);
route.post('/addshop',postshop);
route.get('/getshopbyid/:shop_id',getshop_byid);
route.delete('/removeshop/:shop_id',deleteshop);
route.put('/editshop/:shop_id',updateshop);


module.exports = route;