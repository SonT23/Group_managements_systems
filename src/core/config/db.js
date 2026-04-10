// File: config/db.js
const mysql = require('mysql2');

// Tạo hồ chứa kết nối (Connection Pool)
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, // Giới hạn tối đa 10 kết nối đồng thời (đủ cho quy mô CLB)
    queueLimit: 0        // Không giới hạn số lượng request đứng xếp hàng chờ
});

// Kiểm tra kết nối ngay khi khởi động
pool.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Lỗi kết nối Database:', err.message);
    } else {
        console.log('✅ Đã kết nối thành công tới MySQL Database!');
        connection.release(); // Trả nhân viên về lại Pool sau khi test xong
    }
});

// Xuất pool ra dưới dạng Promise để các Controller dùng async/await
module.exports = pool.promise();