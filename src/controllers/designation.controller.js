const designationService = require('../services/designation.service');

module.exports = {
  createDesignation: (req, res) => {
    const data = req.body;
    designationService.createDesignation(data, (err, results) => {
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

  getDesignationsByDepartment: (req, res) => {
    const id = req.params.id;
    designationService.getDesignationsByDepartment(id, (err, results) => {
      if (err) {
        return res.status(404).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getDesignations: (req, res) => {
    designationService.getDesignations((err, results) => {
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
