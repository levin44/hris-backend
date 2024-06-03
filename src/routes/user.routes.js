const express = require('express');
const { checkToken } = require('../middleware/auth');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/',  userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', checkToken, userController.getUserById);
router.patch('/:id', userController.resetPassword);
router.delete('/:id', userController.deleteUser);
router.post('/login', userController.login);
router.get('/checktoken', checkToken, (req, res)=>{
    return req.json({Status: "success", req})
});


// router.post('/signup', userController.signUp);

module.exports = router;