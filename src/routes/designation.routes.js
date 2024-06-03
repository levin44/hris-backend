const express = require('express');
const { checkToken } = require('../middleware/auth');
const designationController = require('../controllers/designation.controller');

const router = express.Router();

router.get('/', designationController.getDesignations);
router.delete('/:id', designationController.deleteDesignation);
router.put('/:id', designationController.updateDesignation);

router.post('/', designationController.createDesignation);
router.get('/:id', designationController.getDesignationsById);

module.exports = router;