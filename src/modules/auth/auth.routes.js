const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');

// Mở tuyến đường POST cho chức năng tạo QR
router.post('/generate-qr', authController.generateCheckInCode);

module.exports = router;