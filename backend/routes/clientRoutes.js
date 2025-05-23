const express = require('express');
const router = express.Router();
const { addClient, getClients } = require('../controllers/clientController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/clients', authMiddleware, addClient);
router.get('/clients', authMiddleware, getClients);

module.exports = router;