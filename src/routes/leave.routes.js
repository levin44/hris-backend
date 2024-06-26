const express = require('express');
const { checkToken } = require('../middleware/auth');
const leaveController = require('../controllers/leave.controller');

const router = express.Router();

router.get('/', leaveController.getLeaves);
router.delete('/:id', leaveController.deleteLeave);
router.put('/:id', leaveController.updateLeave);

router.post('/', leaveController.createLeave);
router.get('/:id', leaveController.getLeavesById);
router.patch('/:id',leaveController.updateLeaveStatus);

module.exports = router;