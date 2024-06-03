const payrollService = require('../services/payroll.service');

module.exports = {
  createPayroll: (req, res) => {
    const data = req.body;
    payrollService.createPayroll(data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getPayrollsById: (req, res) => {
    const id = req.params.id;
    payrollService.getPayrollsById(id, (err, results) => {
      if (err) {
        return res.status(404).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getPayrollsByDepartment: (req, res) => {
    const id = req.params.id;
    payrollService.getPayrollsByDepartment(id, (err, results) => {
      if (err) {
        return res.status(404).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getPayrolls: (req, res) => {
    payrollService.getPayrolls((err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  updatePayroll: (req, res) => {
    const data = req.body;
    const id = req.params.id
    payrollService.updatePayroll(id, data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'Updated successfully' });
    });
  },

  deletePayroll: (req, res) => {
    const data = req.body;
    payrollService.deletePayroll(data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'User deleted successfully' });
    });
  },

 

};
