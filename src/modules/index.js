const express = require('express');
const router = express.Router();

// Nhập khẩu các tuyến đường của từng phân hệ
const authRoutes = require('./auth/auth.routes');
// Sau này có sự kiện thì thêm: const eventRoutes = require('./events/event.routes');

// Gắn tiền tố cho từng phân hệ
router.use('/auth', authRoutes);
// router.use('/events', eventRoutes);

module.exports = router;