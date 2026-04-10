const jwt = require('jsonwebtoken');

const generateCheckInCode = async (req, res) => {
    try {
        const { student_id, event_id } = req.body;

        if (!student_id || !event_id) {
            return res.status(400).json({ message: "Thiếu thông tin để tạo mã QR!" });
        }

        const payload = { student_id, event_id };
        const secretKey = process.env.JWT_SECRET;
        
        // Tạo mã sống trong 30 giây
        const token = jwt.sign(payload, secretKey, { expiresIn: '30s' });

        return res.status(200).json({
            message: "Tạo mã QR thành công!",
            qr_code: token,
            expires_in: 30
        });
    } catch (error) {
        console.error("Lỗi tạo QR:", error);
        return res.status(500).json({ message: "Lỗi Server nội bộ" });
    }
};

module.exports = {
    generateCheckInCode
};