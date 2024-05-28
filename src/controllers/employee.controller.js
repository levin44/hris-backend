const employeeService = require('../services/employee.service');

module.exports = {
  createEmployee: (req, res) => {
    const data = req.body;
    employeeService.createEmployee(data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getEmployeesById: (req, res) => {
    const id = req.params.id;
    employeeService.getEmployeesById(id, (err, results) => {
      if (err) {
        return res.status(404).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getEmployeesByDepartment: (req, res) => {
    const id = req.params.id;
    employeeService.getEmployeesByDepartment(id, (err, results) => {
      if (err) {
        return res.status(404).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getEmployees: (req, res) => {
    employeeService.getEmployees((err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  updateEmployee: (req, res) => {
    const data = req.body;
    const id = req.params.id
    employeeService.updateEmployee(id, data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'Updated successfully' });
    });
  },

  deleteEmployee: (req, res) => {
    const id = req.params.id;
    employeeService.deleteEmployee(id, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'User deleted successfully' });
    });
  },

 

};
