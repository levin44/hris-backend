const express = require('express');
const { checkToken } = require('../middleware/auth');
const designationController = require('../controllers/designation.controller');

const router = express.Router();

router.get('/', designationController.getDesignations);
router.delete('/:id', designationController.deleteDesignation);
router.put('/:id', designationController.updateDesignation);

// router.post('/',  userController.createUser);
router.get('/:id', designationController.getDesignationsById);
// router.patch('/', checkToken, userController.updateUser);
// router.post('/login', userController.login);
// router.post('/signup', userController.signUp);

module.exports = router;