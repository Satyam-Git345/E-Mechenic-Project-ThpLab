const conn = require('../Model/Connection');

const getshop = async (req, res) => {
    try {
        //  const qry = "SELECT shop_name,shop_owner_name,mobile_no,shop_registration,address,state,city,shop_status FROM tbl_shop";
        const qry = "SELECT * FROM tbl_shop";
       
        await conn.query(qry, (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
            }
            else {
                res.send(result);
            }
        })
    }
    catch (err) {
        res.send(err.sqlMessage);
    }
}

const postshop = async (req,res) => {
    try {
        const data = req.body;
        const qry = "INSERT INTO  tbl_shop SET ?";
        await conn.query(qry, data,(err, result) => {
            if (err) {
                console.log(err.sqlMessage);
            }
            else {
                res.send(result);
            }
        })
    }
    catch (err) {
        res.send(err.sqlMessage);
    }
}

const deleteshop=async(req,res)=>{
    try {
        const data = [req.params.shop_id];
        const qry = "DELETE FROM tbl_shop WHERE shop_id =?";
        await conn.query(qry, data,(err, result) => {
            if (err) {
                console.log(err.sqlMessage);
            }
            else {
                res.send(result);
            }
        })
    }
    catch (err) {
        res.send(err.sqlMessage);
    }

}

const updateshop= async(req, res) => {
    try {
        const data = [req.body.user_type, req.body.shop_registration,req.body.shop_name,
          req.body.address,req.body.state,req.body.city,req.body.pin,req.body.mobile_no, 
          req.body.email,req.body.website,req.body.shop_owner_name,req.body.shop_owner_mobile_no,
          req.body.est_year,req.body.service_type,req.body.other_remark,req.body.password,req.body.reg_on,
          req.params.shop_id];

        const qry = "UPDATE tbl_shop SET user_type=?,shop_registration=?,shop_name=?,address=?,state=?,city=?,pin=?, mobile_no=? est_year=?,service_type=?,other_remark=?,password=?,reg_on=? where shop_id =?";
        await conn.query(qry, data,(err, result) => {
            if (err) {
                console.log(err.sqlMessage);
            }
            else {
                res.send(result);
            }
        })
    }
    catch (err) {
        res.send(err.sqlMessage);
    }
    
}

module.exports = {getshop,postshop,deleteshop,updateshop};













