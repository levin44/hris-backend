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

  getDesignationsById: (id, callBack) => {
    sql.query(
      `SELECT * FROM designation WHERE Desig_ID = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getDepartments: callBack => {
    sql.query(
      `SELECT * FROM department`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateDesignation: (id, data, callBack) => {
    sql.query(
      `UPDATE designation SET Name = ?, Base_Salary = ?, Department_ID = ? WHERE Desig_ID = ?`,
      [data.name, data.baseSalary, data.departmentId, id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteDesignation: (id, callBack) => {
    sql.query(
      `DELETE FROM designation WHERE Desig_ID = ?`,
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
