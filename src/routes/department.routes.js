const express = require('express');
const { checkToken } = require('../middleware/auth');
const departmentController = require('../controllers/department.controller');

const router = express.Router();

router.get('/', departmentController.getDepartments);
router.delete('/:id', departmentController.deleteDesignation);
router.put('/:id', departmentController.updateDesignation);

// router.post('/',  userController.createUser);
router.get('/:id', departmentController.getDesignationsById);
// router.patch('/', checkToken, userController.updateUser);
// router.post('/login', userController.login);
// router.post('/signup', userController.signUp);

module.exports = router;