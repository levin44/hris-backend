const express = require('express');
const { checkToken } = require('../middleware/auth');
const announcementController = require('../controllers/announcement.controller');

const router = express.Router();

router.get('/', announcementController.getAnnouncements);
router.delete('/:id', announcementController.deleteAnnouncement);
router.put('/:id', announcementController.updateAnnouncement);

router.post('/', announcementController.createAnnouncement);
router.get('/:id', announcementController.getAnnouncementsById);

module.exports = router;