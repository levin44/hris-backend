const departmentService = require('../services/department.service');

module.exports = {
  createDepartment: (req, res) => {
    const data = req.body;
    departmentService.createDepartment(data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getDesignationsById: (req, res) => {
    const id = req.params.id;
    designationService.getDesignationsById(id, (err, results) => {
      if (err) {
        return res.status(404).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getDepartments: (req, res) => {
    departmentService.getDepartments((err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  updateDesignation: (req, res) => {
    const data = req.body;
    const id = req.params.id
    designationService.updateDesignation(id, data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'Updated successfully' });
    });
  },

  deleteDesignation: (req, res) => {
    const id = req.params.id;
    designationService.deleteDesignation(id, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'User deleted successfully' });
    });
  },

  login: (req, res) => {
    const data = req.body;
    userService.login(data, (err, results) => {
      if (err) {
        return res.status(401).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1,Login: true, message: 'Login successfully', token: results.token });
    });
  },


};
