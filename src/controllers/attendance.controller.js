const attendanceService = require('../services/attendance.service');

module.exports = {
  createAttendance: (req, res) => {
    const data = req.body;
    attendanceService.createAttendance(data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getAttendancesById: (req, res) => {
    const id = req.params.id;
    attendanceService.getAttendancesById(id, (err, results) => {
      if (err) {
        return res.status(404).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },



  getAttendances: (req, res) => {
    attendanceService.getAttendances((err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  updateAttendance: (req, res) => {
    const data = req.body;
    const id = req.params.id
    attendanceService.updateAttendance(id, data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'Updated successfully' });
    });
  },

  deleteAttendance: (req, res) => {
    const id = req.params.id;
    attendanceService.deleteAttendance(id, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'User deleted successfully' });
    });
  },

 

};
