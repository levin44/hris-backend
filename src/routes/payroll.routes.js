const express = require('express');
const { checkToken } = require('../middleware/auth');
const userController = require('../controllers/user.controller');

const router = express.Router();


router.get('/', checkToken, userController.getUsers);
// router.get('/:id', checkToken, userController.getUserById);
// router.patch('/', checkToken, userController.updateUser);
// router.delete('/', checkToken, userController.deleteUser);
// router.post('/login', userController.login);


module.exports = router;