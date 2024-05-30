const sql = require('../config/database');

module.exports = {
  createLeave: (data, callBack) => {
    sql.query(
      `INSERT INTO leave_table (
        Emp_ID, 
        Leave_Type, 
        Reason, 
        Start_Date, 
        End_Date,
        Statuss 
      ) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        data.employeeId, 
        data.leaveType, 
        data.reason, 
        data.fromDate, 
        data.toDate, 
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

  getLeavesById: (id, callBack) => {
    sql.query(
      `SELECT * FROM leave_table WHERE Leave_ID = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getLeavesByDepartment: (id, callBack) => {
    sql.query(
      `SELECT * FROM leave_table WHERE Department_ID = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getLeaves: callBack => {
    sql.query(
      `SELECT * FROM leave_table`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateLeave: (id, data, callBack) => {
    sql.query(
      `UPDATE leave_table SET 
      Emp_ID = ?, 
      Leave_Type = ?, 
      Reason = ?, 
      Start_Date = ?, 
      End_Date = ?, 
      Statuss = ? 
      WHERE Emp_ID = ?`,
      [
        data.employeeId, 
        data.leaveType, 
        data.reason, 
        data.fromDate, 
        data.toDate, 
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

  deleteLeave: (id, callBack) => {
    sql.query(
      `DELETE FROM leave_table WHERE Leave_ID = ?`,
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
