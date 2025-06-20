const express = require('express');
const router = express.Router();
const { admin, protect } = require('../middlewares/authMiddleware.cjs');
const { transactionalHistory, modifyTransactionalSettings, transactionalStatistics, transactionalSettings, createAPI, getAPIKeys, deleteAPI, sendMail } = require('../controllers/transactionalController.cjs');


router.get('/history', protect, transactionalHistory);
router.get('/settings', protect, transactionalSettings);
router.post('/settings', protect, modifyTransactionalSettings);
router.post('/statistics', protect, transactionalStatistics);

router.post('/createAPI', protect, createAPI);
router.get('/api_keys', protect, getAPIKeys);
router.delete('/deleteAPI', protect, deleteAPI);

router.post('/send/:api_key', sendMail);

module.exports = router;