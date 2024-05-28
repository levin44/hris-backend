const express = require('express');
const { checkToken } = require('../middleware/auth');
const departmentController = require('../controllers/department.controller');

const router = express.Router();

router.post('/',  departmentController.createDepartment);
router.get('/', departmentController.getDepartments);
router.delete('/:id', departmentController.deleteDesignation);
router.put('/:id', departmentController.updateDesignation);

router.get('/:id', departmentController.getDesignationsById);
// router.patch('/', checkToken, userController.updateUser);
// router.post('/login', userController.login);
// router.post('/signup', userController.signUp);

module.exports = router;