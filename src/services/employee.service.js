const employeeModel = require('../models/employee.model');


module.exports = {
  createEmployee: (data, callBack) => {

    employeeModel.createEmployee(data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  getEmployeesById: (id, callBack) => {
    employeeModel.getEmployeesById(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      if (!results.length) {
        return callBack(new Error('Record not found'));
      }
      return callBack(null, results[0]);
    });
  },

  getEmployeesByDepartment: (id, callBack) => {
    employeeModel.getEmployeesByDepartment(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      if (!results.length) {
        return callBack(new Error('Record not found'));
      }
      return callBack(null, results[0]);
    });
  },

  getEmployees: callBack => {
    employeeModel.getEmployees((err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  updateEmployee: (id, data, callBack) => {
    employeeModel.updateEmployee(id, data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  updateEmployeeAllowance: (id, data, callBack) => {
    employeeModel.updateEmployeeAllowance(id, data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  deleteEmployee: (id, callBack) => {
    employeeModel.deleteEmployee(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  
  

};
