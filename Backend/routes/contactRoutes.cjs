const express = require('express');
const router = express.Router();
const { admin, protect } = require('../middlewares/authMiddleware.cjs');
const { addContacts, getContacts, deleteContacts, createList, getLists, getListContacts, deleteMailingList } = require('../controllers/contactController.cjs');

router.get('/all', protect, getContacts);
router.post('/add', protect, addContacts);
router.delete('/delete', protect, deleteContacts);

router.get('/lists', protect, getLists);
router.post('/createlist', protect, createList);
router.delete('/deletelist', protect, deleteMailingList);

router.post('/listcontacts', protect, getListContacts);

module.exports = router;