const sql = require('../config/database');

module.exports = {
  createAttendance: (data, callBack) => {
    sql.query(
      `INSERT INTO attendance (
        Dates, 
        In_Time, 
        Out_Time, 
        Emp_ID, 
        Statuss
      ) VALUES (?, ?, ?, ?, ?)`,
      [
        data.date, 
        data.inTime, 
        data.outTime,
        data.empId,
        data.status
      ],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getAttendancesById: (id, callBack) => {
    sql.query(
      `SELECT * FROM attendance WHERE Att_ID = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


  getAttendances: callBack => {
    sql.query(
      `SELECT * FROM attendance`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateAttendance: (id, data, callBack) => {
    sql.query(
      `UPDATE attendance SET 
      Dates = ?, 
      In_Time = ?, 
      Out_Time = ?, 
      Emp_ID = ?, 
      Statuss = ? 
      WHERE Emp_ID = ?`,
      [
        data.date, 
        data.inTime, 
        data.outTime,
        data.empId,
        data.status,
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

  deleteAttendance: (id, callBack) => {
    sql.query(
      `DELETE FROM attendance WHERE Att_ID = ?`,
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
