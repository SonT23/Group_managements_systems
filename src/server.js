// File: src/server.js

// 1. Nạp két sắt chứa bí mật ngay dòng đầu tiên
require('dotenv').config();

// 2. Nhập khẩu bộ não hệ thống (sẽ viết ở bước 2)
const app = require('./app');

// 3. Khởi chạy Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`=================================`);
    console.log(`🚀 [iCREAL ERP] Server đang chạy!`);
    console.log(`🌐 API Endpoint: http://localhost:${PORT}`);
    console.log(`=================================`);
});