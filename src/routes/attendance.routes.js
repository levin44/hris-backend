const express = require('express');
const { checkToken } = require('../middleware/auth');
const attendanceController = require('../controllers/attendance.controller');

const router = express.Router();

router.get('/', attendanceController.getAttendances);
router.delete('/:id', attendanceController.deleteAttendance);
router.put('/:id', attendanceController.updateAttendance);

router.post('/', attendanceController.createAttendance);
router.get('/:id', attendanceController.getAttendancesById);
// router.patch('/', checkToken, userController.updateUser);
// router.post('/login', userController.login);
// router.post('/signup', userController.signUp);

module.exports = router;