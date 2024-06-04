const announcementModel = require('../models/announcement.model');


module.exports = {
  createAnnouncement: (data, callBack) => {

    announcementModel.createAnnouncement(data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  getAnnouncementsById: (id, callBack) => {
    announcementModel.getAnnouncementsById(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      if (!results.length) {
        return callBack(new Error('Record not found'));
      }
      return callBack(null, results[0]);
    });
  },


  getAnnouncements: callBack => {
    announcementModel.getAnnouncements((err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  updateAnnouncement: (id, data, callBack) => {
  
    announcementModel.updateAnnouncement(id, data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  deleteAnnouncement: (id, callBack) => {
    announcementModel.deleteAnnouncement(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  
  

};
