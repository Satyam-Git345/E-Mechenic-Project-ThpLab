const conn = require("../Model/Connection");
const uuid = require("uuid").v4;

const getcoupan = async (req, res) => {
  try {
    const qry = "SELECT * FROM tbl_coupans";
    await conn.query(qry, (err, result) => {
      if (err) {
        console.log(err.sqlMessage);
      } else {
        res.send(result);
      }
    });
  } catch (err) {
    res.send(err.sqlMessage);
  }
};

const getcoupan_byid = async (req, res) => {
  try {
    const data = [req.params.coupan_id];
    const qry = "SELECT * FROM tbl_coupans WHERE coupan_id=?";
    await conn.query(qry, data, (err, result) => {
      if (err) {
        console.log(err.sqlMessage);
      } else {
        res.send(result);
      }
    });
  } catch (err) {
    res.send(err.sqlMessage);
  }
};

const postcoupan = async (req, res) => {
  try {
    const {
      product_cat_id,
      coupan_logo,
      coupan_title,
      coupan_code,
      coupan_description,
      cash_discount,
      percentage_discount,
      maximum_discount,
      minimun_order,
      valid_from,
      valid_upto,
    } = req.body;
    const data = {
      coupan_logo,
      coupan_title,
      coupan_code,
      coupan_description,
      cash_discount,
      percentage_discount,
      maximum_discount,
      minimun_order,
      valid_from,
      valid_upto,
      product_cat_id,
      coupan_id: uuid(),
    };
    const qry = "INSERT INTO  tbl_coupans SET ?";
    await conn.query(qry, data, (err, result) => {
      if (err) {
        console.log(err.sqlMessage);
      } else {
        res.send(result);
      }
    });
  } catch (err) {
    res.send(err.sqlMessage);
  }
};

const delete_coupan = async (req, res) => {
  try {
    const data = [req.params.coupan_id];
    const qry = "DELETE FROM tbl_coupans  WHERE coupan_id =?";
    await conn.query(qry, data, (err, result) => {
      if (err) {
        console.log(err.sqlMessage);
      } else {
        res.send(result);
      }
    });
  } catch (err) {
    res.send(err.sqlMessage);
  }
};

const update_coupan = async (req, res) => {
  try {
    const data = [
      req.body.coupan_logo,
      req.body.coupan_title,
      req.body.coupan_code,
      req.body.coupan_description,
      req.body.cash_discount,
      req.body.percentage_discount,
      req.body.maximum_discount,
      req.body.minimun_order,
      req.body.valid_from,
      req.body.valid_upto,
      req.params.coupan_id,
    ];
    const qry = `UPDATE tbl_coupans  SET coupan_logo= ?,coupan_title= ?,coupan_code= ?,
        coupan_description= ?,
        cash_discount= ?,
        percentage_discount= ?,
        maximum_discount= ?,
        minimun_order= ?,
        valid_from= ?,
        valid_upto= ?,
        product_cat_id= ?, where coupan_id = ?`;

    await conn.query(qry, data, (err, result) => {
      if (err) {
        console.log(err.sqlMessage);
      } else {
        res.send(result);
      }
    });
  } catch (err) {
    res.send(err.sqlMessage);
  }
};

module.exports = {
    getcoupan,
    getcoupan_byid,
    postcoupan,
    delete_coupan,
    update_coupan    
};
