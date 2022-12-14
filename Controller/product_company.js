const conn = require('../Model/Connection');
const uuid = require('uuid').v4;


const getproduct_company = async (req, res) => {
    try {
        const qry = "SELECT * FROM tbl_product_company";
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

const getproduct_combyid = async (req, res) => {
    try {
        const data = [req.params.product_company_id];
        const qry = "SELECT * FROM tbl_product_company WHERE product_company_id=?";
        await conn.query(qry,data, (err, result) => {
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

const postproduct_company = async (req,res) => {
    try {
        const {product_company_id,product_company} = req.body;
        const data={
            product_company,
            product_company_id:uuid()
        }
        const qry = "INSERT INTO  tbl_product_company SET ?";
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

const delete_product_company=async(req,res)=>{
    try {
        const data = [req.params.product_company_id];
        const qry = "DELETE FROM tbl_product_company WHERE product_company_id =?";
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

const update_product_com= async(req, res) => {
    try {
        const data = [req.body.product_company,req.params.product_company_id];
        const qry = "UPDATE tbl_product_company SET product_company=? where product_company_id =?";
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

module.exports = { getproduct_company,getproduct_combyid,postproduct_company,delete_product_company,update_product_com};













