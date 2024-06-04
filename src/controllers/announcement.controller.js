const announcementService = require('../services/announcement.service');

module.exports = {
  createAnnouncement: (req, res) => {
    const data = req.body;
    announcementService.createAnnouncement(data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getAnnouncementsById: (req, res) => {
    const id = req.params.id;
    announcementService.getAnnouncementsById(id, (err, results) => {
      if (err) {
        return res.status(404).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },



  getAnnouncements: (req, res) => {
    announcementService.getAnnouncements((err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  updateAnnouncement: (req, res) => {
    const data = req.body;
    const id = req.params.id
    announcementService.updateAnnouncement(id, data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'Updated successfully' });
    });
  },

  deleteAnnouncement: (req, res) => {
    const id = req.params.id;
    announcementService.deleteAnnouncement(id, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'User deleted successfully' });
    });
  },

 

};
