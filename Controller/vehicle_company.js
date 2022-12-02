const conn = require('../Model/Connection');
const uuid = require('uuid').v4;

const getvehical_company = async (req, res) => {
    try {
        const qry = "SELECT * FROM tbl_vehicle_company";
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

const postvehical_company = async (req,res) => {
    try {
        const {company_name,company_logo,company_id} = req.body;
        const data={
            company_name,
            company_logo,
            company_id:uuid()
        }
        const qry = "INSERT INTO tbl_vehicle_company SET ?";
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

const delete_vehical_company=async(req,res)=>{
    try {
        const data = [req.params.company_id];
        const qry = "DELETE FROM tbl_vehicle_company WHERE company_id =?";
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

const update_vehical_company= async(req, res) => {
    try {
        const data = [req.body.company_name,req.body.company_logo,req.params.company_id];
        const qry = "UPDATE tbl_vehicle_company SET company_name=?,company_logo=? where company_id =?";
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

module.exports = {getvehical_company,postvehical_company,delete_vehical_company,update_vehical_company,update_vehical_company};

