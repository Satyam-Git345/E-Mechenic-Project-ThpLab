const conn = require('../Model/Connection');

const getcustomer = async (req, res) => {
    try {
        const qry = "SELECT * FROM tbl_customer";
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

const postcustomer = async (req, res) => {
    try {
        const data = req.body;
        const qry = "INSERT INTO tbl_customer SET ?";
        await conn.query(qry, data, (err, result) => {
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

const deletecustomer = async (req, res) => {
    try {
        const data = [req.params.customer_id];
        const qry = "DELETE FROM tbl_customer  WHERE customer_id";
        await conn.query(qry, data, (err, result) => {
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

const updatecustomer = async (req, res) => {
    try {
        const data = [req.body.mobile_no, req.body.email, req.body.first_name, req.body.last_name, req.body.pin,
        req.body.address, req.body.state, req.body.DOB, req.body.city, req.body.profile_photo, req.body.reg_on,
        req.body.organization_name, req.body.req.body.blocked_by_admin, req.body.unblock_by_admin];

        const qry = `UPDATE tbl_customer SET mobile_no=?,email=?,first_name=?,last_name=?,
        last_name=?,pin=?,address=?,state=?,DOB=?,
        city=?,profile_photo=?,reg_on=?,organization_name=?,blocked_by_admin=?,unblock_by_admin=?`;
        await conn.query(qry, data, (err, result) => {
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
module.exports = { getcustomer, postcustomer, deletecustomer, updatecustomer };