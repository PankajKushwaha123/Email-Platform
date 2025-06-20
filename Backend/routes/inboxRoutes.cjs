const express = require('express');
const router = express.Router();
const { admin, protect } = require('../middlewares/authMiddleware.cjs');
const { fetchEmails } = require('../controllers/inboxController.cjs');

router.get('/fetch', protect, fetchEmails);

module.exports = router;