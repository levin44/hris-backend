const express = require('express');
const { checkToken } = require('../middleware/auth');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/',  userController.createUser);
router.get('/', checkToken, userController.getUsers);
router.get('/:id', checkToken, userController.getUserById);
router.patch('/', checkToken, userController.updateUser);
router.delete('/', checkToken, userController.deleteUser);
router.post('/login', userController.login);
router.get('/checktoken', checkToken, (req, res)=>{
    return req.json({Status: "success", req})
});



// router.post('/signup', userController.signUp);

module.exports = router;