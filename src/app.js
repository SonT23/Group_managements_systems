// File: src/app.js
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

// ========================================================
// 1. MIDDLEWARE CHUẨN MỰC (Phiên dịch dữ liệu)
// ========================================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========================================================
// 2. CẤU HÌNH ĐƯỜNG DẪN TÀI NGUYÊN (Hybrid Architecture)
// ========================================================
// Vì app.js đang nằm trong 'src', ta phải lùi ra 1 bước ('..') 
// để chạm tới thư mục 'views' và 'public' nằm ngoài cùng.
const viewsPath = path.join(__dirname, '..', 'views');
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

// ========================================================
// 3. CẤU HÌNH HANDLEBARS
// ========================================================
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// ========================================================
// 4. ROUTE KIỂM TRA SỨC KHỎE (Health Check)
// ========================================================
// Dùng để test xem Server có sống không trước khi viết Logic phức tạp
app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'Pong! Trái tim iCREAL ERP đang đập rất khỏe!' });
});

// ========================================================
// 5. NƠI GẮN CÁC MODULES (Sẽ mở khóa sau)
// ========================================================
const masterRouter = require('./modules'); 
app.use('/api', masterRouter);
// Xuất app ra để server.js có thể gọi
module.exports = app;