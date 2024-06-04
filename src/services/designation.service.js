const designationModel = require('../models/designation.model');

module.exports = {
  createDesignation: (data, callBack) => {

    designationModel.createDesignation(data, (err, results) => {
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

  getDesignationsByDepartment: (id, callBack) => {
    designationModel.getDesignationsByDepartment(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      if (!results.length) {
        return callBack(new Error('Record not found'));
      }
      return callBack(null, results[0]);
    });
  },

  getDesignations: callBack => {
    designationModel.getDesignations((err, results) => {
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
