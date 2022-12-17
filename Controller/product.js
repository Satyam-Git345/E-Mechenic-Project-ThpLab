const conn = require('../Model/Connection');
const uuid = require('uuid').v4;


const getproduct = async (req, res) => {
    try {
        const qry = `SELECT tbl_product.product_name,
        tbl_product.MRP,
        tbl_product_category.product_category,
        tbl_product_company.product_company 
        FROM ((tbl_product INNER JOIN tbl_product_category ON
        tbl_product.product_cat_id=tbl_product_category.product_cat_id)
        INNER JOIN tbl_product_company ON
        tbl_product.product_company_id=tbl_product_company.product_company_id);`;
        
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

// const getvehical_catbyid = async (req, res) => {
//     try {
//         const data = [req.params.vehicle_cat_id];
//         const qry = "SELECT * FROM tbl_vehicle_category WHERE vehicle_cat_id=?";
//         await conn.query(qry,data, (err, result) => {
//             if (err) {
//                 console.log(err.sqlMessage);
//             }
//             else {
//                 res.send(result);
//             }
//         })
//     }
//     catch (err) {
//         res.send(err.sqlMessage);
//     }
// }

const postproduct = async (req,res) => {
    try {
        const {product_name,product_cat_id,product_company_id,MRP,description} = req.body;
        
        const data={
            product_name,
            product_cat_id,
            product_company_id,
            MRP,
            description,
            product_id:uuid()
        }
        const qry = "INSERT INTO  tbl_product SET ?";
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

// const delete_vehical_cat=async(req,res)=>{
//     try {
//         const data = [req.params.vehicle_cat_id];
//         const qry = "DELETE FROM tbl_vehicle_category WHERE vehicle_cat_id =?";
//         await conn.query(qry, data,(err, result) => {
//             if (err) {
//                 console.log(err.sqlMessage);
//             }
//             else {
//                 res.send(result);
//             }
//         })
//     }
//     catch (err) {
//         res.send(err.sqlMessage);
//     }

// }

// const update_vehical_cat= async(req, res) => {
//     try {
//         const data = [req.body.vehicle_type,req.params.vehicle_cat_id];
//         const qry = "UPDATE tbl_vehicle_category SET vehicle_type=? where vehicle_cat_id =?";
//         await conn.query(qry, data,(err, result) => {
//             if (err) {
//                 console.log(err.sqlMessage);
//             }
//             else {
//                 res.send(result);
//             }
//         })
//     }
//     catch (err) {
//         res.send(err.sqlMessage);
//     }
    
// }

module.exports = {getproduct,postproduct};













