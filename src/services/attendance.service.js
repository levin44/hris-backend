const attendanceModel = require('../models/attendance.model');


module.exports = {
  createAttendance: (data, callBack) => {

    attendanceModel.createAttendance(data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  getAttendancesById: (id, callBack) => {
    attendanceModel.getAttendancesById(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      if (!results.length) {
        return callBack(new Error('Record not found'));
      }
      return callBack(null, results[0]);
    });
  },


  getAttendances: callBack => {
    attendanceModel.getAttendances((err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  updateAttendance: (id, data, callBack) => {
  
    attendanceModel.updateAttendance(id, data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  deleteAttendance: (id, callBack) => {
    attendanceModel.deleteAttendance(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  
  

};
