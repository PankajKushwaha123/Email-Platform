const express = require('express');
const router = express.Router();
const { admin, protect } = require('../middlewares/authMiddleware.cjs');
const { track, receipt, unsubscribe, verify } = require('../controllers/trackController.cjs');

router.get('/links', track);
router.get('/receipt', receipt);
router.get('/unsubscribe', unsubscribe);
router.get('/verify/:token', verify);

module.exports = router;