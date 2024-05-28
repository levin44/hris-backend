const sql = require('../config/database');

module.exports = {
  createTask: (data, callBack) => {
    sql.query(
      `INSERT INTO task (
        Emp_ID, 
        Start_Date, 
        End_Date,
        Statuss,
        Title,
        Description
        
      ) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        data.fullName, 
        data.department, 
        data.designation,
        data.employmentStartDate,
        data.emergencyContactName,
        data.bloodCategory,
      ],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getTasksById: (id, callBack) => {
    sql.query(
      `SELECT * FROM task WHERE Task_ID = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getTasksByDepartment: (id, callBack) => {
    sql.query(
      `SELECT * FROM task WHERE Department_ID = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getTasks: callBack => {
    sql.query(
      `SELECT * FROM task`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateTask: (id, data, callBack) => {
    sql.query(
      `UPDATE task SET 
      Emp_ID = ?, 
      Start_Date = ?, 
      End_Date = ?, 
      Statuss = ?, 
      Title = ?, 
      Description = ?
      WHERE Task_ID = ?`,
      [
        data.fullName, 
        data.department, 
        data.designation,
        data.employmentStartDate,
        data.emergencyContactName,
        data.bloodCategory,
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

  deleteTask: (id, callBack) => {
    sql.query(
      `DELETE FROM Task WHERE Task_ID = ?`,
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
