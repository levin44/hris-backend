const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = {
  createUser: (data, callBack) => {
    const salt = bcrypt.genSaltSync(10);
    data.password = bcrypt.hashSync(data.password, salt);

    userModel.create(data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  getUserById: (id, callBack) => {
    userModel.getUserById(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      if (!results.length) {
        return callBack(new Error('Record not found'));
      }
      return callBack(null, results[0]);
    });
  },

  getUsers: callBack => {
    userModel.getUsers((err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  updateUser: (data, callBack) => {
    const salt = bcrypt.genSaltSync(10);
    data.password = bcrypt.hashSync(data.password, salt);

    userModel.updateUser(data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  resetPassword: (id, data, callBack) => {
    const salt = bcrypt.genSaltSync(10);
    data.password = bcrypt.hashSync(data.password, salt);

    userModel.resetPassword(id, data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  deleteUser: (id, callBack) => {
    userModel.deleteUser(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  login: (data, callBack) => {
    userModel.getUserById(data.username, (err, results) => {
      if (err) {
        return callBack(err);
      }
      if (!results.length) {
        return callBack(new Error('Invalid employer ID'));
      }

      const empId = results[0].Emp_ID;
      const role = results[0].Role;
      const dbpassword = results[0].Passwords;

      const isPasswordValid = bcrypt.compareSync(data.password, dbpassword);

      if (isPasswordValid) {
        const token = jwt.sign({ empId,role }, process.env.JWT_KEY, { expiresIn: '1d' });
        return callBack(null, { token, role });
      } else {
        return callBack(new Error('Invalid password'));
      }
    });
  },


};
