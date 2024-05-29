const payrollModel = require('../models/payroll.model');


module.exports = {
  createPayroll: (data, callBack) => {

    payrollModel.createPayroll(data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  getPayrollsById: (id, callBack) => {
    payrollModel.getPayrollsById(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      if (!results.length) {
        return callBack(new Error('Record not found'));
      }
      return callBack(null, results[0]);
    });
  },

  getPayrollsByDepartment: (id, callBack) => {
    payrollModel.getPayrollsByDepartment(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      if (!results.length) {
        return callBack(new Error('Record not found'));
      }
      return callBack(null, results[0]);
    });
  },

  getPayrolls: callBack => {
    payrollModel.getPayrolls((err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  updatePayroll: (id, data, callBack) => {
  
    payrollModel.updatePayroll(id, data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  deletePayroll: (id, callBack) => {
    payrollModel.deletePayroll(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  
  

};
