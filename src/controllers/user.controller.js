const userService = require('../services/user.service');

module.exports = {
  createUser: (req, res) => {
    const data = req.body;
    userService.createUser(data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getUserById: (req, res) => {
    const id = req.params.id;
    userService.getUserById(id, (err, results) => {
      if (err) {
        return res.status(404).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getUsers: (req, res) => {
    userService.getUsers((err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  updateUser: (req, res) => {
    const data = req.body;
    userService.updateUser(data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'Updated successfully' });
    });
  },

  deleteUser: (req, res) => {
    const username = req.body.username;
    userService.deleteUser(username, (err, results) => {
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

  // signUp: (req, res) => {
  //   const data = req.body;
  //   userService.signUp(data, (err, results) => {
  //     if (err) {
  //       return res.status(500).json({ success: 0, message: err.message });
  //     }
  //     return res.status(200).json({ success: 1, message: 'Login created successfully' });
  //   });
  // }

};
