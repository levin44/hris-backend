const departmentModel = require('../models/department.model');

module.exports = {
  createDepartment: (data, callBack) => {
    departmentModel.createDepartment(data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  getDesignationsById: (id, callBack) => {
    designationModel.getDesignationsById(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      if (!results.length) {
        return callBack(new Error('Record not found'));
      }
      return callBack(null, results[0]);
    });
  },

  getDepartments: callBack => {
    departmentModel.getDepartments((err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  updateDesignation: (id, data, callBack) => {
  
    designationModel.updateDesignation(id, data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  deleteDesignation: (id, callBack) => {
    designationModel.deleteDesignation(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

 
};
