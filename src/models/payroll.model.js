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
      `SELECT Emp_ID, password, role FROM login`,
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

  deleteUser: (username, callBack) => {
    sql.query(
      `DELETE FROM login WHERE username = ?`,
      [username],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
