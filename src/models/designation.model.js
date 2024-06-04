const sql = require('../config/database');

module.exports = {
  createDesignation: (data, callBack) => {
    sql.query(
      `INSERT INTO designation (Name, Base_Salary, Department_ID) VALUES (?, ?, ?)`,
      [data.designation, data.Base_Salary, data.department],
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

  getDesignationsByDepartment: (id, callBack) => {
    sql.query(
      `SELECT * FROM designation WHERE Department_ID = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getDesignations: callBack => {
    sql.query(
      `SELECT * FROM designation`,
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
