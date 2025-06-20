const express = require('express');
const router = express.Router();
const { processCampaigns, refreshCampaignStatistics, processTransactionalMails } = require('../controllers/cronController.cjs');

router.get('/processcampaigns', processCampaigns);
router.get('/processtransactionalmails', processTransactionalMails);

router.get('/refreshstats', refreshCampaignStatistics);

module.exports = router;