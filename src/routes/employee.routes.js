const express = require('express');
const { checkToken } = require('../middleware/auth');
const employeeController = require('../controllers/employee.controller');

const router = express.Router();

router.get('/', employeeController.getEmployees);
router.delete('/:id', employeeController.deleteEmployee);
router.put('/:id', employeeController.updateEmployee);

router.post('/', employeeController.createEmployee);
router.get('/:id', employeeController.getEmployeesById);
router.patch('/:id', employeeController.updateEmployeeAllowance);
// router.post('/login', userController.login);
// router.post('/signup', userController.signUp);

module.exports = router;