// 1. MỞ KHÓA KÉT SẮT ĐẦU TIÊN (Phải nằm trên cùng)
require('dotenv').config();

// 2. IMPORT VŨ KHÍ
const express = require('express');
const { engine } = require('express-handlebars'); // Cú pháp mới
// const cors = require('cors'); // Chỉ mở ra nếu bạn thực sự cài thư viện cors

// 3. KHỞI TẠO APP VÀ KẾT NỐI DB
const app = express();
const db = require('./core/config/db'); // Chạy dòng này là DB tự động test kết nối

// 4. CẤU HÌNH GIAO DIỆN HANDLEBARS
app.engine('hbs', engine({ extname: '.hbs' })); // Đổi đuôi file thành .hbs cho ngắn
app.set('view engine', 'hbs');
app.set('views', './views'); // Chỉ đường dẫn tới thư mục views

// 5. MIDDLEWARE XỬ LÝ DỮ LIỆU & FILE TĨNH
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Mở cửa thư mục public để file HTML đọc được file style.css

// 6. CHẠY SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 iCREAL ERP Server đang chạy uy lực tại: http://localhost:${port}`);
});