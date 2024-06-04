const sql = require('../config/database');

module.exports = {
  create: (data, callBack) => {
    sql.query(
      `INSERT INTO users (Emp_ID, Passwords, Role) VALUES (?, ?, ?)`,
      [data.username, data.password, data.role],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUserById: (id, callBack) => {
    sql.query(
      `SELECT * FROM users WHERE Emp_ID = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUsers: callBack => {
    sql.query(
      `SELECT Emp_ID, role FROM users`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateUser: (data, callBack) => {
    sql.query(
      `UPDATE login SET password = ?, role = ? WHERE username = ?`,
      [data.password, data.role, data.username],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  resetPassword: (id, data, callBack) => {
    sql.query(
      `UPDATE users SET Passwords = ? WHERE Emp_ID = ?`,
      [data.password, id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


  deleteUser: (id, callBack) => {
    sql.query(
      `DELETE FROM users WHERE Emp_ID = ?`,
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
