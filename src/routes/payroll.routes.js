const express = require('express');
const { checkToken } = require('../middleware/auth');
const payrollController = require('../controllers/payroll.controller');

const router = express.Router();

router.get('/', payrollController.getPayrolls);
router.delete('/:id', payrollController.deletePayroll);
router.put('/:id', payrollController.updatePayroll);

router.post('/', payrollController.createPayroll);
router.get('/:id', payrollController.getPayrollsById);
// router.patch('/', checkToken, userController.updateUser);
// router.post('/login', userController.login);
// router.post('/signup', userController.signUp);

module.exports = router;