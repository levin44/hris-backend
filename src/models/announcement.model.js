const sql = require('../config/database');

module.exports = {
  createAnnouncement: (data, callBack) => {
    sql.query(
      `INSERT INTO announcement (
        Emp_ID, 
        Title, 
        Body
      ) VALUES (?, ?, ?)`,
      [
        data.from, 
        data.title, 
        data.body
      ],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getAnnouncementsById: (id, callBack) => {
    sql.query(
      `SELECT * FROM announcement WHERE Announcement_ID = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


  getAnnouncements: callBack => {
    sql.query(
      `SELECT * FROM announcement`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateAnnouncement: (id, data, callBack) => {
    sql.query(
      `UPDATE announcement SET 
      Emp_ID = ?, 
      Title = ?, 
      Body = ? 
      WHERE Announcement_ID = ?`,
      [
        data.from, 
        data.title, 
        data.body,
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

  deleteAnnouncement: (id, callBack) => {
    sql.query(
      `DELETE FROM announcement WHERE Announcement_ID = ?`,
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
