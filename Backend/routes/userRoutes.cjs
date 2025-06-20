const express = require('express');

const {
  getUsers,
  login,
  register,
  updatePassword,
  addSender,
  senders,
  deleteSenders,
  addDomains,
  domains,
  deleteDomains,
  addInbox,
  inboxes,
  deleteInbox
} = require('../controllers/userController.cjs');

const { admin, protect } = require('../middlewares/authMiddleware.cjs');
const router = express.Router();


router.post('/register', register);
router.post('/login', login);
router.get('/', protect, admin, getUsers);
router.put('/', protect, updatePassword);


router.get('/senders', protect, senders);
router.post('/senders', protect, addSender);
router.delete('/senders', protect, deleteSenders);


router.get('/domains', protect, domains);
router.post('/domains', protect, addDomains);
router.delete('/domains', protect, deleteDomains);


router.get('/inboxes', protect, inboxes);
router.post('/inboxes', protect, addInbox);
router.delete('/inboxes', protect, deleteInbox);


module.exports = router;