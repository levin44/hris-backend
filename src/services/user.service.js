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

  deleteUser: (username, callBack) => {
    userModel.deleteUser(username, (err, results) => {
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

      const user = results[0];
      const isPasswordValid = bcrypt.compareSync(data.password, user.Passwords);

      if (isPasswordValid) {
        const token = jwt.sign({ user }, process.env.JWT_KEY, { expiresIn: '1d' });
        return callBack(null, { token });
      } else {
        return callBack(new Error('Invalid password'));
      }
    });
  },

  // signUp: (data, callBack) => {
  //   const salt = bcrypt.genSaltSync(10);
  //   bcrypt.hash(data.password, salt, (err, hash) => {
  //     if (err) return callBack(new Error("Error when hashing password"));

  //     const newUser = {
  //       username: data.username,
  //       password: hash
  //     };

  //     userModel.create(newUser, (err, results) => {
  //       if (err) {
  //         return callBack(err);
  //       }
  //       return callBack(null, results);
  //     });
  //   });
  // }

};
