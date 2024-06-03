const taskModel = require('../models/task.model');


module.exports = {
  createTask: (data, callBack) => {

    taskModel.createTask(data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  getTasksById: (id, callBack) => {
    taskModel.getTasksById(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      if (!results.length) {
        return callBack(new Error('Record not found'));
      }
      return callBack(null, results[0]);
    });
  },

  getTasksByDepartment: (id, callBack) => {
    taskModel.getTasksByDepartment(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      if (!results.length) {
        return callBack(new Error('Record not found'));
      }
      return callBack(null, results[0]);
    });
  },

  getTasks: callBack => {
    taskModel.getTasks((err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  updateTask: (id, data, callBack) => {
  
    taskModel.updateTask(id, data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  updateTaskStatus: (id, data, callBack) => {
    taskModel.updateTaskStatus(id, data, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  deleteTask: (id, callBack) => {
    taskModel.deleteTask(id, (err, results) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  
  

};
