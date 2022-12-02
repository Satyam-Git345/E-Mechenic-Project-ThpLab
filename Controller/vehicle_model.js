const conn = require('../Model/Connection');

const getvehical_model = async (req, res) => {
    try {
        const qry = "SELECT * FROM tbl_vehicle_model";
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

const postvehical_model = async (req,res) => {
    try {
        const data = req.body;
        const qry = "INSERT INTO tbl_vehicle_model SET ?";
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

const delete_vehical_model=async(req,res)=>{
    try {
        const data = [req.params.model_id,req.params.company_id];
        const qry = "DELETE FROM tbl_vehicle_model WHERE model_id =? and company_id=?";
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

const update_vehical_model= async(req, res) => {
    try {
        const data = [req.body.model_name,req.body.model_date,req.body.vehicle_cat_id,req.body.fuel_type,req.params.company_id];
        const qry = "UPDATE tbl_vehicle_model SET model_name=?,model_date=?,vehicle_cat_id=?,fuel_type=?, where company_id =?";
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
module.exports = {getvehical_model,postvehical_model,delete_vehical_model,update_vehical_model};