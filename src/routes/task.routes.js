const express = require('express');
const { checkToken } = require('../middleware/auth');
const taskController = require('../controllers/task.controller');

const router = express.Router();

router.get('/', taskController.getTasks);
router.delete('/:id', taskController.deleteTask);
router.put('/:id', taskController.updateTask);

router.post('/', taskController.createTask);
router.get('/:id', taskController.getTasksById);
// router.patch('/', checkToken, userController.updateUser);


module.exports = router;