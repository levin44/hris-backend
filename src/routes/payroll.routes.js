const express = require('express');
const { checkToken } = require('../middleware/auth');
const payrollController = require('../controllers/payroll.controller');

const router = express.Router();

router.get('/', payrollController.getPayrolls);
//delete many ids at once
router.delete('/', payrollController.deletePayroll);
router.put('/:id', payrollController.updatePayroll);

router.post('/', payrollController.createPayroll);
router.get('/:id', payrollController.getPayrollsById);

module.exports = router;