const sql = require('../config/database');

module.exports = {
  createPayroll: (data, callBack) => {
    sql.query(
      `INSERT INTO payroll (
        Emp_ID,
        Basic_Salary,
        OT_Hours,
        Allowance,
        OT_Payment,
        ETF,
        EPF,
        Tax,
        Income,
        Date
      ) VALUES ?`,
      [
        data.map(item => [
          item.employeeId,
          item.baseSalary,
          item.otHours,
          item.allowance,
          item.otPayment,
          item.etf,
          item.epf,
          item.tax,
          item.income,
          item.date
      ])
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

  deletePayroll: (data, callBack) => {
    const idList = data.payrollIds.join(',');
    sql.query(
      `DELETE FROM payroll WHERE Payroll_ID IN (${idList})`,
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
