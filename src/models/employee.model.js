const sql = require('../config/database');

module.exports = {
  createEmployee: (data, callBack) => {
    sql.query(
      `INSERT INTO employee (
        Name, 
        Department_ID, 
        Designation_ID,
        Start_Date,
        Emergency_Name,
        Emergency_Contact,
        Blood_Type,
        Address,
        DOB,
        Gender,
        NIC,
        Primary_Contact_No,
        Secondary_Contact_No,
        Shift,
        Email
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)`,
      [
        data.fullName, 
        data.department, 
        data.designation,
        data.employmentStartDate,
        data.emergencyContactName,
        data.emergencyContactNumber,
        data.bloodCategory,
        data.permanentAddress,
        data.dateOfBirth,
        data.gender,
        data.nicNumber,
        data.primaryContactNumber,
        data.secondaryContactNumber,
        data.shift,
        data.emailAddress
      ],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getEmployeesById: (id, callBack) => {
    sql.query(
      `SELECT * FROM employee WHERE Emp_ID = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getEmployeesByDepartment: (id, callBack) => {
    sql.query(
      `SELECT * FROM employee WHERE Department_ID = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getEmployees: callBack => {
    sql.query(
      `SELECT * FROM employee`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateEmployee: (id, data, callBack) => {
    sql.query(
      `UPDATE employee SET 
      Name = ?, 
      Department_ID = ?, 
      Designation_ID = ?, 
      Start_Date = ?, 
      Emergency_Name = ?, 
      Emergency_Contact = ?, 
      Blood_Type = ?, 
      Address = ?, 
      DOB = ?, 
      Gender = ?, 
      NIC = ?, 
      Primary_Contact_No = ?, 
      Secondary_Contact_No = ?, 
      Shift = ?, 
      Email = ? 
      WHERE Emp_ID = ?`,
      [
        data.fullName, 
        data.department, 
        data.designation,
        data.employmentStartDate,
        data.emergencyContactName,
        data.emergencyContactNumber,
        data.bloodCategory,
        data.permanentAddress,
        data.dateOfBirth,
        data.gender,
        data.nicNumber,
        data.primaryContactNumber,
        data.secondaryContactNumber,
        data.shift,
        data.emailAddress,
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

  updateEmployeeAllowance: (id, data, callBack) => {
    sql.query(
      `UPDATE employee SET Allowance = ? WHERE Emp_ID = ?`,
      [data.allowance, id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteEmployee: (id, callBack) => {
    sql.query(
      `DELETE FROM employee WHERE Emp_ID = ?`,
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
