const taskService = require('../services/task.service');

module.exports = {
  createTask: (req, res) => {
    const data = req.body;
    taskService.createTask(data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getTasksById: (req, res) => {
    const id = req.params.id;
    taskService.getTasksById(id, (err, results) => {
      if (err) {
        return res.status(404).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getTasksByDepartment: (req, res) => {
    const id = req.params.id;
    taskService.getTasksByDepartment(id, (err, results) => {
      if (err) {
        return res.status(404).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  getTasks: (req, res) => {
    taskService.getTasks((err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, data: results });
    });
  },

  updateTask: (req, res) => {
    const data = req.body;
    const id = req.params.id
    taskService.updateTask(id, data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'Updated successfully' });
    });
  },

  updateTaskStatus: (req, res) => {
    const data = req.body;
    const id = req.params.id
    taskService.updateTaskStatus(id, data, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'Updated successfully' });
    });
  },

  deleteTask: (req, res) => {
    const id = req.params.id;
    taskService.deleteTask(id, (err, results) => {
      if (err) {
        return res.status(500).json({ success: 0, message: err.message });
      }
      return res.status(200).json({ success: 1, message: 'User deleted successfully' });
    });
  },

 

};
