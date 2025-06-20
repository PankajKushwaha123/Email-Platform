const express = require('express');
const router = express.Router();
const { admin, protect } = require('../middlewares/authMiddleware.cjs');
const { getCampaigns, createCampaign, getCampaign, updateCampaign, campaignStatistics, modifyCampaignSettings, campaignSettings } = require('../controllers/campaignController.cjs');

router.get('/', protect, getCampaigns);
router.post('/', protect, createCampaign);
router.put('/', protect, updateCampaign);
router.post('/campaignstats', protect, campaignStatistics)

router.get('/settings', protect, campaignSettings);
router.post('/updatesettings', protect, modifyCampaignSettings);
router.get('/:campaign_id', protect, getCampaign);

module.exports = router;