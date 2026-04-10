// File: src/core/config/db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test kết nối ngay khi file này được gọi
pool.getConnection((err, connection) => {
    if (err) {
        console.error('❌ [DATABASE] Lỗi kết nối MySQL:', err.message);
    } else {
        console.log('✅ [DATABASE] Đã kết nối thành công tới MySQL!');
        connection.release();
    }
});

// Xuất ra dưới dạng Promise để dùng async/await cho sướng
module.exports = pool.promise();