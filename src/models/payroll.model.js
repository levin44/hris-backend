const sql = require('../config/database');

module.exports = {
  createPayroll: (data, callBack) => {
    sql.query(
      `INSERT INTO payroll (
        OT_Hours, 
        EPF,
        ETF,
        Bonus,
        Basic_Salary
      ) VALUES (?, ?, ?, ?, ?)`,
      [
          data.otHours, 
          data.epf,
          data.etf,
          data.allowance,
          data.salary
      ],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getPayrollsById: (id, callBack) => {
    sql.query(
      `SELECT * FROM payroll WHERE Payroll_ID = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


  getPayrolls: callBack => {
    sql.query(
      `SELECT * FROM payroll`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updatePayroll: (id, data, callBack) => {
    sql.query(
      `UPDATE payroll SET 
      OT_Hours = ?, 
      EPF = ?,
      ETF = ?,
      Bonus = ?,
      Basic_Salary = ?
      WHERE Payroll_ID = ?`,
      [
        // data.department, 
        data.otHours, 
        // data.noPayLeaves,
        // data.taxPercentage,
        data.epf,
        data.etf,
        data.allowance,
        data.salary,
        id
      ],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deletePayroll: (id, callBack) => {
    sql.query(
      `DELETE FROM payroll WHERE Payroll_ID = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
