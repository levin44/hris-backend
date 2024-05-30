const leaveService = require('../services/leave.service');

module.exports = {
  createLeave: (req, res) => {
    const data = req.body;
    leaveService.createLeave(data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getLeavesById: (req, res) => {
    const id = req.params.id;
    leaveService.getLeavesById(id, (err, results) => {
      if (err) {
        return res.status(404).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getLeavesByDepartment: (req, res) => {
    const id = req.params.id;
    leaveService.getLeavesByDepartment(id, (err, results) => {
      if (err) {
        return res.status(404).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getLeaves: (req, res) => {
    leaveService.getLeaves((err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  updateLeave: (req, res) => {
    const data = req.body;
    const id = req.params.id
    leaveService.updateLeave(id, data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'Updated successfully' });
    });
  },

  deleteLeave: (req, res) => {
    const id = req.params.id;
    leaveService.deleteLeave(id, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'User deleted successfully' });
    });
  },

 

};
