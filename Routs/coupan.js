const express = require('express');
const route=express.Router();

const {getcoupan,
    getcoupan_byid,
    postcoupan,
    delete_coupan,
    update_coupan}=require('../Controller/coupan');

route.get('/viewcoupan',getcoupan);
route.get('/viewcoupanbyid/:coupan_id',getcoupan_byid);
route.post('/addcoupan',postcoupan);
route.delete('/deletcoupan/:coupan_id',delete_coupan);
route.put('/updatecoupan/:coupan_id',update_coupan);


module.exports = route;