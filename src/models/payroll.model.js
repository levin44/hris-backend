const sql = require('../config/database');

module.exports = {
  createPayroll: (data, callBack) => {
    sql.query(
      `INSERT INTO payroll (
        OT_Hours, 
        EPF,
        ETF,
        Allowance,
        Tax,
        Income,
        Basic_Salary
      ) VALUES (?, ?, ?, ?, ?)`,
      [
          data.otHours, 
          data.epf,
          data.etf,
          data.allowance,
          data.tax,
          data.income,
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
      Allowance = ?,
      Tax = ?,
      Income = ?,
      Basic_Salary = ?
      WHERE Payroll_ID = ?`,
      [
        data.otHours, 
        data.epf,
        data.etf,
        data.allowance,
        data.tax,
        data.income,
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
