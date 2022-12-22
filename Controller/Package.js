const conn = require('../Model/Connection');
const uuid = require('uuid').v4;


const getpackage_cat = async (req, res) => {
    try {
        const qry = "SELECT * FROM tbl_package_category";
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

const getpackage_catbyid = async (req, res) => {
    try {
        const data = [req.params.package_cat_id];
        const qry = "SELECT * FROM tbl_package_category WHERE package_cat_id=?";
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

const postpackage_cat = async (req,res) => {
    try {
        const {package_name} = req.body;
        const data={
            package_name,
            package_cat_id:uuid()
        }
        const qry = "INSERT INTO  tbl_package_category SET ?";
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

const delete_package_cat=async(req,res)=>{
    try {
        const data = [req.params.package_cat_id];
        const qry = "DELETE FROM tbl_package_category  WHERE package_cat_id =?";
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

const update_package_cat= async(req, res) => {
    try {
        const data = [req.body.package_name,req.params.package_cat_id];
        const qry = "UPDATE tbl_package_category  SET package_name=? where package_cat_id =?";
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

module.exports = {getpackage_cat,getpackage_catbyid,postpackage_cat,delete_package_cat,update_package_cat};













