const leaveModel = require('../models/leave.model');


module.exports = {
  createLeave: (data, callBack) => {

    leaveModel.createLeave(data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  getLeavesById: (id, callBack) => {
    leaveModel.getLeavesById(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      if (!results.length) {
        return callBack(new Error('Record not found'));
      }
      return callBack(null, results[0]);
    });
  },

  getLeavesByDepartment: (id, callBack) => {
    leaveModel.getLeavesByDepartment(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      if (!results.length) {
        return callBack(new Error('Record not found'));
      }
      return callBack(null, results[0]);
    });
  },

  getLeaves: callBack => {
    leaveModel.getLeaves((err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  updateLeave: (id, data, callBack) => {
  
    leaveModel.updateLeave(id, data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  updateLeaveStatus: (id, data, callBack) => {
    leaveModel.updateLeaveStatus(id, data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  deleteLeave: (id, callBack) => {
    leaveModel.deleteLeave(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  
  

};
